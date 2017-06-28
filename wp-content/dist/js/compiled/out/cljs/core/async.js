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
var args28245 = [];
var len__27054__auto___28251 = arguments.length;
var i__27055__auto___28252 = (0);
while(true){
if((i__27055__auto___28252 < len__27054__auto___28251)){
args28245.push((arguments[i__27055__auto___28252]));

var G__28253 = (i__27055__auto___28252 + (1));
i__27055__auto___28252 = G__28253;
continue;
} else {
}
break;
}

var G__28247 = args28245.length;
switch (G__28247) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28245.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28248 = (function (f,blockable,meta28249){
this.f = f;
this.blockable = blockable;
this.meta28249 = meta28249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28250,meta28249__$1){
var self__ = this;
var _28250__$1 = this;
return (new cljs.core.async.t_cljs$core$async28248(self__.f,self__.blockable,meta28249__$1));
});

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28250){
var self__ = this;
var _28250__$1 = this;
return self__.meta28249;
});

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28249","meta28249",-527225542,null)], null);
});

cljs.core.async.t_cljs$core$async28248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28248";

cljs.core.async.t_cljs$core$async28248.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28248");
});

cljs.core.async.__GT_t_cljs$core$async28248 = (function cljs$core$async$__GT_t_cljs$core$async28248(f__$1,blockable__$1,meta28249){
return (new cljs.core.async.t_cljs$core$async28248(f__$1,blockable__$1,meta28249));
});

}

return (new cljs.core.async.t_cljs$core$async28248(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28257 = [];
var len__27054__auto___28260 = arguments.length;
var i__27055__auto___28261 = (0);
while(true){
if((i__27055__auto___28261 < len__27054__auto___28260)){
args28257.push((arguments[i__27055__auto___28261]));

var G__28262 = (i__27055__auto___28261 + (1));
i__27055__auto___28261 = G__28262;
continue;
} else {
}
break;
}

var G__28259 = args28257.length;
switch (G__28259) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28257.length)].join('')));

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
var args28264 = [];
var len__27054__auto___28267 = arguments.length;
var i__27055__auto___28268 = (0);
while(true){
if((i__27055__auto___28268 < len__27054__auto___28267)){
args28264.push((arguments[i__27055__auto___28268]));

var G__28269 = (i__27055__auto___28268 + (1));
i__27055__auto___28268 = G__28269;
continue;
} else {
}
break;
}

var G__28266 = args28264.length;
switch (G__28266) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28264.length)].join('')));

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
var args28271 = [];
var len__27054__auto___28274 = arguments.length;
var i__27055__auto___28275 = (0);
while(true){
if((i__27055__auto___28275 < len__27054__auto___28274)){
args28271.push((arguments[i__27055__auto___28275]));

var G__28276 = (i__27055__auto___28275 + (1));
i__27055__auto___28275 = G__28276;
continue;
} else {
}
break;
}

var G__28273 = args28271.length;
switch (G__28273) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28271.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28278 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28278);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28278,ret){
return (function (){
return fn1.call(null,val_28278);
});})(val_28278,ret))
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
var args28279 = [];
var len__27054__auto___28282 = arguments.length;
var i__27055__auto___28283 = (0);
while(true){
if((i__27055__auto___28283 < len__27054__auto___28282)){
args28279.push((arguments[i__27055__auto___28283]));

var G__28284 = (i__27055__auto___28283 + (1));
i__27055__auto___28283 = G__28284;
continue;
} else {
}
break;
}

var G__28281 = args28279.length;
switch (G__28281) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28279.length)].join('')));

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
var n__26894__auto___28286 = n;
var x_28287 = (0);
while(true){
if((x_28287 < n__26894__auto___28286)){
(a[x_28287] = (0));

var G__28288 = (x_28287 + (1));
x_28287 = G__28288;
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

var G__28289 = (i + (1));
i = G__28289;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28293 = (function (alt_flag,flag,meta28294){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28294 = meta28294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28295,meta28294__$1){
var self__ = this;
var _28295__$1 = this;
return (new cljs.core.async.t_cljs$core$async28293(self__.alt_flag,self__.flag,meta28294__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28295){
var self__ = this;
var _28295__$1 = this;
return self__.meta28294;
});})(flag))
;

cljs.core.async.t_cljs$core$async28293.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28293.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28293.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28294","meta28294",-810557504,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28293";

cljs.core.async.t_cljs$core$async28293.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28293");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28293 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28293(alt_flag__$1,flag__$1,meta28294){
return (new cljs.core.async.t_cljs$core$async28293(alt_flag__$1,flag__$1,meta28294));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28293(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28299 = (function (alt_handler,flag,cb,meta28300){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28300 = meta28300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28301,meta28300__$1){
var self__ = this;
var _28301__$1 = this;
return (new cljs.core.async.t_cljs$core$async28299(self__.alt_handler,self__.flag,self__.cb,meta28300__$1));
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28301){
var self__ = this;
var _28301__$1 = this;
return self__.meta28300;
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28300","meta28300",-408575116,null)], null);
});

cljs.core.async.t_cljs$core$async28299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28299";

cljs.core.async.t_cljs$core$async28299.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28299");
});

cljs.core.async.__GT_t_cljs$core$async28299 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28299(alt_handler__$1,flag__$1,cb__$1,meta28300){
return (new cljs.core.async.t_cljs$core$async28299(alt_handler__$1,flag__$1,cb__$1,meta28300));
});

}

return (new cljs.core.async.t_cljs$core$async28299(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28302_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28302_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28303_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28303_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25979__auto__ = wport;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28304 = (i + (1));
i = G__28304;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25979__auto__ = ret;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25967__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25967__auto__;
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
var args__27061__auto__ = [];
var len__27054__auto___28310 = arguments.length;
var i__27055__auto___28311 = (0);
while(true){
if((i__27055__auto___28311 < len__27054__auto___28310)){
args__27061__auto__.push((arguments[i__27055__auto___28311]));

var G__28312 = (i__27055__auto___28311 + (1));
i__27055__auto___28311 = G__28312;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28307){
var map__28308 = p__28307;
var map__28308__$1 = ((((!((map__28308 == null)))?((((map__28308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28308):map__28308);
var opts = map__28308__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28305){
var G__28306 = cljs.core.first.call(null,seq28305);
var seq28305__$1 = cljs.core.next.call(null,seq28305);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28306,seq28305__$1);
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
var args28313 = [];
var len__27054__auto___28363 = arguments.length;
var i__27055__auto___28364 = (0);
while(true){
if((i__27055__auto___28364 < len__27054__auto___28363)){
args28313.push((arguments[i__27055__auto___28364]));

var G__28365 = (i__27055__auto___28364 + (1));
i__27055__auto___28364 = G__28365;
continue;
} else {
}
break;
}

var G__28315 = args28313.length;
switch (G__28315) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28313.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28200__auto___28367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___28367){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___28367){
return (function (state_28339){
var state_val_28340 = (state_28339[(1)]);
if((state_val_28340 === (7))){
var inst_28335 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28341_28368 = state_28339__$1;
(statearr_28341_28368[(2)] = inst_28335);

(statearr_28341_28368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (1))){
var state_28339__$1 = state_28339;
var statearr_28342_28369 = state_28339__$1;
(statearr_28342_28369[(2)] = null);

(statearr_28342_28369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (4))){
var inst_28318 = (state_28339[(7)]);
var inst_28318__$1 = (state_28339[(2)]);
var inst_28319 = (inst_28318__$1 == null);
var state_28339__$1 = (function (){var statearr_28343 = state_28339;
(statearr_28343[(7)] = inst_28318__$1);

return statearr_28343;
})();
if(cljs.core.truth_(inst_28319)){
var statearr_28344_28370 = state_28339__$1;
(statearr_28344_28370[(1)] = (5));

} else {
var statearr_28345_28371 = state_28339__$1;
(statearr_28345_28371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (13))){
var state_28339__$1 = state_28339;
var statearr_28346_28372 = state_28339__$1;
(statearr_28346_28372[(2)] = null);

(statearr_28346_28372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (6))){
var inst_28318 = (state_28339[(7)]);
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28339__$1,(11),to,inst_28318);
} else {
if((state_val_28340 === (3))){
var inst_28337 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28339__$1,inst_28337);
} else {
if((state_val_28340 === (12))){
var state_28339__$1 = state_28339;
var statearr_28347_28373 = state_28339__$1;
(statearr_28347_28373[(2)] = null);

(statearr_28347_28373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (2))){
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28339__$1,(4),from);
} else {
if((state_val_28340 === (11))){
var inst_28328 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
if(cljs.core.truth_(inst_28328)){
var statearr_28348_28374 = state_28339__$1;
(statearr_28348_28374[(1)] = (12));

} else {
var statearr_28349_28375 = state_28339__$1;
(statearr_28349_28375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (9))){
var state_28339__$1 = state_28339;
var statearr_28350_28376 = state_28339__$1;
(statearr_28350_28376[(2)] = null);

(statearr_28350_28376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (5))){
var state_28339__$1 = state_28339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28351_28377 = state_28339__$1;
(statearr_28351_28377[(1)] = (8));

} else {
var statearr_28352_28378 = state_28339__$1;
(statearr_28352_28378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (14))){
var inst_28333 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28353_28379 = state_28339__$1;
(statearr_28353_28379[(2)] = inst_28333);

(statearr_28353_28379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (10))){
var inst_28325 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28354_28380 = state_28339__$1;
(statearr_28354_28380[(2)] = inst_28325);

(statearr_28354_28380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (8))){
var inst_28322 = cljs.core.async.close_BANG_.call(null,to);
var state_28339__$1 = state_28339;
var statearr_28355_28381 = state_28339__$1;
(statearr_28355_28381[(2)] = inst_28322);

(statearr_28355_28381[(1)] = (10));


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
});})(c__28200__auto___28367))
;
return ((function (switch__28088__auto__,c__28200__auto___28367){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_28359 = [null,null,null,null,null,null,null,null];
(statearr_28359[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_28359[(1)] = (1));

return statearr_28359;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_28339){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_28339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e28360){if((e28360 instanceof Object)){
var ex__28092__auto__ = e28360;
var statearr_28361_28382 = state_28339;
(statearr_28361_28382[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28383 = state_28339;
state_28339 = G__28383;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_28339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_28339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___28367))
})();
var state__28202__auto__ = (function (){var statearr_28362 = f__28201__auto__.call(null);
(statearr_28362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___28367);

return statearr_28362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___28367))
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
return (function (p__28571){
var vec__28572 = p__28571;
var v = cljs.core.nth.call(null,vec__28572,(0),null);
var p = cljs.core.nth.call(null,vec__28572,(1),null);
var job = vec__28572;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28200__auto___28758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___28758,res,vec__28572,v,p,job,jobs,results){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___28758,res,vec__28572,v,p,job,jobs,results){
return (function (state_28579){
var state_val_28580 = (state_28579[(1)]);
if((state_val_28580 === (1))){
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28579__$1,(2),res,v);
} else {
if((state_val_28580 === (2))){
var inst_28576 = (state_28579[(2)]);
var inst_28577 = cljs.core.async.close_BANG_.call(null,res);
var state_28579__$1 = (function (){var statearr_28581 = state_28579;
(statearr_28581[(7)] = inst_28576);

return statearr_28581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28579__$1,inst_28577);
} else {
return null;
}
}
});})(c__28200__auto___28758,res,vec__28572,v,p,job,jobs,results))
;
return ((function (switch__28088__auto__,c__28200__auto___28758,res,vec__28572,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_28585 = [null,null,null,null,null,null,null,null];
(statearr_28585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_28585[(1)] = (1));

return statearr_28585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_28579){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_28579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e28586){if((e28586 instanceof Object)){
var ex__28092__auto__ = e28586;
var statearr_28587_28759 = state_28579;
(statearr_28587_28759[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28760 = state_28579;
state_28579 = G__28760;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_28579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_28579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___28758,res,vec__28572,v,p,job,jobs,results))
})();
var state__28202__auto__ = (function (){var statearr_28588 = f__28201__auto__.call(null);
(statearr_28588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___28758);

return statearr_28588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___28758,res,vec__28572,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28589){
var vec__28590 = p__28589;
var v = cljs.core.nth.call(null,vec__28590,(0),null);
var p = cljs.core.nth.call(null,vec__28590,(1),null);
var job = vec__28590;
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
var n__26894__auto___28761 = n;
var __28762 = (0);
while(true){
if((__28762 < n__26894__auto___28761)){
var G__28593_28763 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28593_28763) {
case "compute":
var c__28200__auto___28765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28762,c__28200__auto___28765,G__28593_28763,n__26894__auto___28761,jobs,results,process,async){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (__28762,c__28200__auto___28765,G__28593_28763,n__26894__auto___28761,jobs,results,process,async){
return (function (state_28606){
var state_val_28607 = (state_28606[(1)]);
if((state_val_28607 === (1))){
var state_28606__$1 = state_28606;
var statearr_28608_28766 = state_28606__$1;
(statearr_28608_28766[(2)] = null);

(statearr_28608_28766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (2))){
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28606__$1,(4),jobs);
} else {
if((state_val_28607 === (3))){
var inst_28604 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28606__$1,inst_28604);
} else {
if((state_val_28607 === (4))){
var inst_28596 = (state_28606[(2)]);
var inst_28597 = process.call(null,inst_28596);
var state_28606__$1 = state_28606;
if(cljs.core.truth_(inst_28597)){
var statearr_28609_28767 = state_28606__$1;
(statearr_28609_28767[(1)] = (5));

} else {
var statearr_28610_28768 = state_28606__$1;
(statearr_28610_28768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (5))){
var state_28606__$1 = state_28606;
var statearr_28611_28769 = state_28606__$1;
(statearr_28611_28769[(2)] = null);

(statearr_28611_28769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (6))){
var state_28606__$1 = state_28606;
var statearr_28612_28770 = state_28606__$1;
(statearr_28612_28770[(2)] = null);

(statearr_28612_28770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (7))){
var inst_28602 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
var statearr_28613_28771 = state_28606__$1;
(statearr_28613_28771[(2)] = inst_28602);

(statearr_28613_28771[(1)] = (3));


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
});})(__28762,c__28200__auto___28765,G__28593_28763,n__26894__auto___28761,jobs,results,process,async))
;
return ((function (__28762,switch__28088__auto__,c__28200__auto___28765,G__28593_28763,n__26894__auto___28761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_28617 = [null,null,null,null,null,null,null];
(statearr_28617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_28617[(1)] = (1));

return statearr_28617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_28606){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_28606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e28618){if((e28618 instanceof Object)){
var ex__28092__auto__ = e28618;
var statearr_28619_28772 = state_28606;
(statearr_28619_28772[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28773 = state_28606;
state_28606 = G__28773;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_28606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_28606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(__28762,switch__28088__auto__,c__28200__auto___28765,G__28593_28763,n__26894__auto___28761,jobs,results,process,async))
})();
var state__28202__auto__ = (function (){var statearr_28620 = f__28201__auto__.call(null);
(statearr_28620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___28765);

return statearr_28620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(__28762,c__28200__auto___28765,G__28593_28763,n__26894__auto___28761,jobs,results,process,async))
);


break;
case "async":
var c__28200__auto___28774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28762,c__28200__auto___28774,G__28593_28763,n__26894__auto___28761,jobs,results,process,async){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (__28762,c__28200__auto___28774,G__28593_28763,n__26894__auto___28761,jobs,results,process,async){
return (function (state_28633){
var state_val_28634 = (state_28633[(1)]);
if((state_val_28634 === (1))){
var state_28633__$1 = state_28633;
var statearr_28635_28775 = state_28633__$1;
(statearr_28635_28775[(2)] = null);

(statearr_28635_28775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (2))){
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28633__$1,(4),jobs);
} else {
if((state_val_28634 === (3))){
var inst_28631 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28633__$1,inst_28631);
} else {
if((state_val_28634 === (4))){
var inst_28623 = (state_28633[(2)]);
var inst_28624 = async.call(null,inst_28623);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28624)){
var statearr_28636_28776 = state_28633__$1;
(statearr_28636_28776[(1)] = (5));

} else {
var statearr_28637_28777 = state_28633__$1;
(statearr_28637_28777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (5))){
var state_28633__$1 = state_28633;
var statearr_28638_28778 = state_28633__$1;
(statearr_28638_28778[(2)] = null);

(statearr_28638_28778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (6))){
var state_28633__$1 = state_28633;
var statearr_28639_28779 = state_28633__$1;
(statearr_28639_28779[(2)] = null);

(statearr_28639_28779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (7))){
var inst_28629 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28640_28780 = state_28633__$1;
(statearr_28640_28780[(2)] = inst_28629);

(statearr_28640_28780[(1)] = (3));


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
});})(__28762,c__28200__auto___28774,G__28593_28763,n__26894__auto___28761,jobs,results,process,async))
;
return ((function (__28762,switch__28088__auto__,c__28200__auto___28774,G__28593_28763,n__26894__auto___28761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_28644 = [null,null,null,null,null,null,null];
(statearr_28644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_28644[(1)] = (1));

return statearr_28644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_28633){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_28633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e28645){if((e28645 instanceof Object)){
var ex__28092__auto__ = e28645;
var statearr_28646_28781 = state_28633;
(statearr_28646_28781[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28782 = state_28633;
state_28633 = G__28782;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_28633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_28633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(__28762,switch__28088__auto__,c__28200__auto___28774,G__28593_28763,n__26894__auto___28761,jobs,results,process,async))
})();
var state__28202__auto__ = (function (){var statearr_28647 = f__28201__auto__.call(null);
(statearr_28647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___28774);

return statearr_28647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(__28762,c__28200__auto___28774,G__28593_28763,n__26894__auto___28761,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28783 = (__28762 + (1));
__28762 = G__28783;
continue;
} else {
}
break;
}

var c__28200__auto___28784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___28784,jobs,results,process,async){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___28784,jobs,results,process,async){
return (function (state_28669){
var state_val_28670 = (state_28669[(1)]);
if((state_val_28670 === (1))){
var state_28669__$1 = state_28669;
var statearr_28671_28785 = state_28669__$1;
(statearr_28671_28785[(2)] = null);

(statearr_28671_28785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (2))){
var state_28669__$1 = state_28669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28669__$1,(4),from);
} else {
if((state_val_28670 === (3))){
var inst_28667 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28669__$1,inst_28667);
} else {
if((state_val_28670 === (4))){
var inst_28650 = (state_28669[(7)]);
var inst_28650__$1 = (state_28669[(2)]);
var inst_28651 = (inst_28650__$1 == null);
var state_28669__$1 = (function (){var statearr_28672 = state_28669;
(statearr_28672[(7)] = inst_28650__$1);

return statearr_28672;
})();
if(cljs.core.truth_(inst_28651)){
var statearr_28673_28786 = state_28669__$1;
(statearr_28673_28786[(1)] = (5));

} else {
var statearr_28674_28787 = state_28669__$1;
(statearr_28674_28787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (5))){
var inst_28653 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28669__$1 = state_28669;
var statearr_28675_28788 = state_28669__$1;
(statearr_28675_28788[(2)] = inst_28653);

(statearr_28675_28788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (6))){
var inst_28650 = (state_28669[(7)]);
var inst_28655 = (state_28669[(8)]);
var inst_28655__$1 = cljs.core.async.chan.call(null,(1));
var inst_28656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28657 = [inst_28650,inst_28655__$1];
var inst_28658 = (new cljs.core.PersistentVector(null,2,(5),inst_28656,inst_28657,null));
var state_28669__$1 = (function (){var statearr_28676 = state_28669;
(statearr_28676[(8)] = inst_28655__$1);

return statearr_28676;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28669__$1,(8),jobs,inst_28658);
} else {
if((state_val_28670 === (7))){
var inst_28665 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
var statearr_28677_28789 = state_28669__$1;
(statearr_28677_28789[(2)] = inst_28665);

(statearr_28677_28789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (8))){
var inst_28655 = (state_28669[(8)]);
var inst_28660 = (state_28669[(2)]);
var state_28669__$1 = (function (){var statearr_28678 = state_28669;
(statearr_28678[(9)] = inst_28660);

return statearr_28678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28669__$1,(9),results,inst_28655);
} else {
if((state_val_28670 === (9))){
var inst_28662 = (state_28669[(2)]);
var state_28669__$1 = (function (){var statearr_28679 = state_28669;
(statearr_28679[(10)] = inst_28662);

return statearr_28679;
})();
var statearr_28680_28790 = state_28669__$1;
(statearr_28680_28790[(2)] = null);

(statearr_28680_28790[(1)] = (2));


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
});})(c__28200__auto___28784,jobs,results,process,async))
;
return ((function (switch__28088__auto__,c__28200__auto___28784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_28684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_28684[(1)] = (1));

return statearr_28684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_28669){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_28669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e28685){if((e28685 instanceof Object)){
var ex__28092__auto__ = e28685;
var statearr_28686_28791 = state_28669;
(statearr_28686_28791[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28792 = state_28669;
state_28669 = G__28792;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_28669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_28669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___28784,jobs,results,process,async))
})();
var state__28202__auto__ = (function (){var statearr_28687 = f__28201__auto__.call(null);
(statearr_28687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___28784);

return statearr_28687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___28784,jobs,results,process,async))
);


var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__,jobs,results,process,async){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__,jobs,results,process,async){
return (function (state_28725){
var state_val_28726 = (state_28725[(1)]);
if((state_val_28726 === (7))){
var inst_28721 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28727_28793 = state_28725__$1;
(statearr_28727_28793[(2)] = inst_28721);

(statearr_28727_28793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (20))){
var state_28725__$1 = state_28725;
var statearr_28728_28794 = state_28725__$1;
(statearr_28728_28794[(2)] = null);

(statearr_28728_28794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (1))){
var state_28725__$1 = state_28725;
var statearr_28729_28795 = state_28725__$1;
(statearr_28729_28795[(2)] = null);

(statearr_28729_28795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (4))){
var inst_28690 = (state_28725[(7)]);
var inst_28690__$1 = (state_28725[(2)]);
var inst_28691 = (inst_28690__$1 == null);
var state_28725__$1 = (function (){var statearr_28730 = state_28725;
(statearr_28730[(7)] = inst_28690__$1);

return statearr_28730;
})();
if(cljs.core.truth_(inst_28691)){
var statearr_28731_28796 = state_28725__$1;
(statearr_28731_28796[(1)] = (5));

} else {
var statearr_28732_28797 = state_28725__$1;
(statearr_28732_28797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (15))){
var inst_28703 = (state_28725[(8)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28725__$1,(18),to,inst_28703);
} else {
if((state_val_28726 === (21))){
var inst_28716 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28733_28798 = state_28725__$1;
(statearr_28733_28798[(2)] = inst_28716);

(statearr_28733_28798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (13))){
var inst_28718 = (state_28725[(2)]);
var state_28725__$1 = (function (){var statearr_28734 = state_28725;
(statearr_28734[(9)] = inst_28718);

return statearr_28734;
})();
var statearr_28735_28799 = state_28725__$1;
(statearr_28735_28799[(2)] = null);

(statearr_28735_28799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (6))){
var inst_28690 = (state_28725[(7)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28725__$1,(11),inst_28690);
} else {
if((state_val_28726 === (17))){
var inst_28711 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
if(cljs.core.truth_(inst_28711)){
var statearr_28736_28800 = state_28725__$1;
(statearr_28736_28800[(1)] = (19));

} else {
var statearr_28737_28801 = state_28725__$1;
(statearr_28737_28801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (3))){
var inst_28723 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28725__$1,inst_28723);
} else {
if((state_val_28726 === (12))){
var inst_28700 = (state_28725[(10)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28725__$1,(14),inst_28700);
} else {
if((state_val_28726 === (2))){
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28725__$1,(4),results);
} else {
if((state_val_28726 === (19))){
var state_28725__$1 = state_28725;
var statearr_28738_28802 = state_28725__$1;
(statearr_28738_28802[(2)] = null);

(statearr_28738_28802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (11))){
var inst_28700 = (state_28725[(2)]);
var state_28725__$1 = (function (){var statearr_28739 = state_28725;
(statearr_28739[(10)] = inst_28700);

return statearr_28739;
})();
var statearr_28740_28803 = state_28725__$1;
(statearr_28740_28803[(2)] = null);

(statearr_28740_28803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (9))){
var state_28725__$1 = state_28725;
var statearr_28741_28804 = state_28725__$1;
(statearr_28741_28804[(2)] = null);

(statearr_28741_28804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (5))){
var state_28725__$1 = state_28725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28742_28805 = state_28725__$1;
(statearr_28742_28805[(1)] = (8));

} else {
var statearr_28743_28806 = state_28725__$1;
(statearr_28743_28806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (14))){
var inst_28705 = (state_28725[(11)]);
var inst_28703 = (state_28725[(8)]);
var inst_28703__$1 = (state_28725[(2)]);
var inst_28704 = (inst_28703__$1 == null);
var inst_28705__$1 = cljs.core.not.call(null,inst_28704);
var state_28725__$1 = (function (){var statearr_28744 = state_28725;
(statearr_28744[(11)] = inst_28705__$1);

(statearr_28744[(8)] = inst_28703__$1);

return statearr_28744;
})();
if(inst_28705__$1){
var statearr_28745_28807 = state_28725__$1;
(statearr_28745_28807[(1)] = (15));

} else {
var statearr_28746_28808 = state_28725__$1;
(statearr_28746_28808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (16))){
var inst_28705 = (state_28725[(11)]);
var state_28725__$1 = state_28725;
var statearr_28747_28809 = state_28725__$1;
(statearr_28747_28809[(2)] = inst_28705);

(statearr_28747_28809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (10))){
var inst_28697 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28748_28810 = state_28725__$1;
(statearr_28748_28810[(2)] = inst_28697);

(statearr_28748_28810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (18))){
var inst_28708 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28749_28811 = state_28725__$1;
(statearr_28749_28811[(2)] = inst_28708);

(statearr_28749_28811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (8))){
var inst_28694 = cljs.core.async.close_BANG_.call(null,to);
var state_28725__$1 = state_28725;
var statearr_28750_28812 = state_28725__$1;
(statearr_28750_28812[(2)] = inst_28694);

(statearr_28750_28812[(1)] = (10));


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
});})(c__28200__auto__,jobs,results,process,async))
;
return ((function (switch__28088__auto__,c__28200__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_28754 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_28754[(1)] = (1));

return statearr_28754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_28725){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_28725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e28755){if((e28755 instanceof Object)){
var ex__28092__auto__ = e28755;
var statearr_28756_28813 = state_28725;
(statearr_28756_28813[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28814 = state_28725;
state_28725 = G__28814;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_28725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_28725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__,jobs,results,process,async))
})();
var state__28202__auto__ = (function (){var statearr_28757 = f__28201__auto__.call(null);
(statearr_28757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_28757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__,jobs,results,process,async))
);

return c__28200__auto__;
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
var args28815 = [];
var len__27054__auto___28818 = arguments.length;
var i__27055__auto___28819 = (0);
while(true){
if((i__27055__auto___28819 < len__27054__auto___28818)){
args28815.push((arguments[i__27055__auto___28819]));

var G__28820 = (i__27055__auto___28819 + (1));
i__27055__auto___28819 = G__28820;
continue;
} else {
}
break;
}

var G__28817 = args28815.length;
switch (G__28817) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28815.length)].join('')));

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
var args28822 = [];
var len__27054__auto___28825 = arguments.length;
var i__27055__auto___28826 = (0);
while(true){
if((i__27055__auto___28826 < len__27054__auto___28825)){
args28822.push((arguments[i__27055__auto___28826]));

var G__28827 = (i__27055__auto___28826 + (1));
i__27055__auto___28826 = G__28827;
continue;
} else {
}
break;
}

var G__28824 = args28822.length;
switch (G__28824) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28822.length)].join('')));

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
var args28829 = [];
var len__27054__auto___28882 = arguments.length;
var i__27055__auto___28883 = (0);
while(true){
if((i__27055__auto___28883 < len__27054__auto___28882)){
args28829.push((arguments[i__27055__auto___28883]));

var G__28884 = (i__27055__auto___28883 + (1));
i__27055__auto___28883 = G__28884;
continue;
} else {
}
break;
}

var G__28831 = args28829.length;
switch (G__28831) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28829.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28200__auto___28886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___28886,tc,fc){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___28886,tc,fc){
return (function (state_28857){
var state_val_28858 = (state_28857[(1)]);
if((state_val_28858 === (7))){
var inst_28853 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28859_28887 = state_28857__$1;
(statearr_28859_28887[(2)] = inst_28853);

(statearr_28859_28887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (1))){
var state_28857__$1 = state_28857;
var statearr_28860_28888 = state_28857__$1;
(statearr_28860_28888[(2)] = null);

(statearr_28860_28888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (4))){
var inst_28834 = (state_28857[(7)]);
var inst_28834__$1 = (state_28857[(2)]);
var inst_28835 = (inst_28834__$1 == null);
var state_28857__$1 = (function (){var statearr_28861 = state_28857;
(statearr_28861[(7)] = inst_28834__$1);

return statearr_28861;
})();
if(cljs.core.truth_(inst_28835)){
var statearr_28862_28889 = state_28857__$1;
(statearr_28862_28889[(1)] = (5));

} else {
var statearr_28863_28890 = state_28857__$1;
(statearr_28863_28890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (13))){
var state_28857__$1 = state_28857;
var statearr_28864_28891 = state_28857__$1;
(statearr_28864_28891[(2)] = null);

(statearr_28864_28891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (6))){
var inst_28834 = (state_28857[(7)]);
var inst_28840 = p.call(null,inst_28834);
var state_28857__$1 = state_28857;
if(cljs.core.truth_(inst_28840)){
var statearr_28865_28892 = state_28857__$1;
(statearr_28865_28892[(1)] = (9));

} else {
var statearr_28866_28893 = state_28857__$1;
(statearr_28866_28893[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (3))){
var inst_28855 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28857__$1,inst_28855);
} else {
if((state_val_28858 === (12))){
var state_28857__$1 = state_28857;
var statearr_28867_28894 = state_28857__$1;
(statearr_28867_28894[(2)] = null);

(statearr_28867_28894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (2))){
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28857__$1,(4),ch);
} else {
if((state_val_28858 === (11))){
var inst_28834 = (state_28857[(7)]);
var inst_28844 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28857__$1,(8),inst_28844,inst_28834);
} else {
if((state_val_28858 === (9))){
var state_28857__$1 = state_28857;
var statearr_28868_28895 = state_28857__$1;
(statearr_28868_28895[(2)] = tc);

(statearr_28868_28895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (5))){
var inst_28837 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28838 = cljs.core.async.close_BANG_.call(null,fc);
var state_28857__$1 = (function (){var statearr_28869 = state_28857;
(statearr_28869[(8)] = inst_28837);

return statearr_28869;
})();
var statearr_28870_28896 = state_28857__$1;
(statearr_28870_28896[(2)] = inst_28838);

(statearr_28870_28896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (14))){
var inst_28851 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28871_28897 = state_28857__$1;
(statearr_28871_28897[(2)] = inst_28851);

(statearr_28871_28897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (10))){
var state_28857__$1 = state_28857;
var statearr_28872_28898 = state_28857__$1;
(statearr_28872_28898[(2)] = fc);

(statearr_28872_28898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (8))){
var inst_28846 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
if(cljs.core.truth_(inst_28846)){
var statearr_28873_28899 = state_28857__$1;
(statearr_28873_28899[(1)] = (12));

} else {
var statearr_28874_28900 = state_28857__$1;
(statearr_28874_28900[(1)] = (13));

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
});})(c__28200__auto___28886,tc,fc))
;
return ((function (switch__28088__auto__,c__28200__auto___28886,tc,fc){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_28878 = [null,null,null,null,null,null,null,null,null];
(statearr_28878[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_28878[(1)] = (1));

return statearr_28878;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_28857){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_28857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e28879){if((e28879 instanceof Object)){
var ex__28092__auto__ = e28879;
var statearr_28880_28901 = state_28857;
(statearr_28880_28901[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28902 = state_28857;
state_28857 = G__28902;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_28857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_28857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___28886,tc,fc))
})();
var state__28202__auto__ = (function (){var statearr_28881 = f__28201__auto__.call(null);
(statearr_28881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___28886);

return statearr_28881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___28886,tc,fc))
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
var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__){
return (function (state_28966){
var state_val_28967 = (state_28966[(1)]);
if((state_val_28967 === (7))){
var inst_28962 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
var statearr_28968_28989 = state_28966__$1;
(statearr_28968_28989[(2)] = inst_28962);

(statearr_28968_28989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (1))){
var inst_28946 = init;
var state_28966__$1 = (function (){var statearr_28969 = state_28966;
(statearr_28969[(7)] = inst_28946);

return statearr_28969;
})();
var statearr_28970_28990 = state_28966__$1;
(statearr_28970_28990[(2)] = null);

(statearr_28970_28990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (4))){
var inst_28949 = (state_28966[(8)]);
var inst_28949__$1 = (state_28966[(2)]);
var inst_28950 = (inst_28949__$1 == null);
var state_28966__$1 = (function (){var statearr_28971 = state_28966;
(statearr_28971[(8)] = inst_28949__$1);

return statearr_28971;
})();
if(cljs.core.truth_(inst_28950)){
var statearr_28972_28991 = state_28966__$1;
(statearr_28972_28991[(1)] = (5));

} else {
var statearr_28973_28992 = state_28966__$1;
(statearr_28973_28992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (6))){
var inst_28949 = (state_28966[(8)]);
var inst_28946 = (state_28966[(7)]);
var inst_28953 = (state_28966[(9)]);
var inst_28953__$1 = f.call(null,inst_28946,inst_28949);
var inst_28954 = cljs.core.reduced_QMARK_.call(null,inst_28953__$1);
var state_28966__$1 = (function (){var statearr_28974 = state_28966;
(statearr_28974[(9)] = inst_28953__$1);

return statearr_28974;
})();
if(inst_28954){
var statearr_28975_28993 = state_28966__$1;
(statearr_28975_28993[(1)] = (8));

} else {
var statearr_28976_28994 = state_28966__$1;
(statearr_28976_28994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (3))){
var inst_28964 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28966__$1,inst_28964);
} else {
if((state_val_28967 === (2))){
var state_28966__$1 = state_28966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28966__$1,(4),ch);
} else {
if((state_val_28967 === (9))){
var inst_28953 = (state_28966[(9)]);
var inst_28946 = inst_28953;
var state_28966__$1 = (function (){var statearr_28977 = state_28966;
(statearr_28977[(7)] = inst_28946);

return statearr_28977;
})();
var statearr_28978_28995 = state_28966__$1;
(statearr_28978_28995[(2)] = null);

(statearr_28978_28995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (5))){
var inst_28946 = (state_28966[(7)]);
var state_28966__$1 = state_28966;
var statearr_28979_28996 = state_28966__$1;
(statearr_28979_28996[(2)] = inst_28946);

(statearr_28979_28996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (10))){
var inst_28960 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
var statearr_28980_28997 = state_28966__$1;
(statearr_28980_28997[(2)] = inst_28960);

(statearr_28980_28997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (8))){
var inst_28953 = (state_28966[(9)]);
var inst_28956 = cljs.core.deref.call(null,inst_28953);
var state_28966__$1 = state_28966;
var statearr_28981_28998 = state_28966__$1;
(statearr_28981_28998[(2)] = inst_28956);

(statearr_28981_28998[(1)] = (10));


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
});})(c__28200__auto__))
;
return ((function (switch__28088__auto__,c__28200__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28089__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28089__auto____0 = (function (){
var statearr_28985 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28985[(0)] = cljs$core$async$reduce_$_state_machine__28089__auto__);

(statearr_28985[(1)] = (1));

return statearr_28985;
});
var cljs$core$async$reduce_$_state_machine__28089__auto____1 = (function (state_28966){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_28966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e28986){if((e28986 instanceof Object)){
var ex__28092__auto__ = e28986;
var statearr_28987_28999 = state_28966;
(statearr_28987_28999[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29000 = state_28966;
state_28966 = G__29000;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28089__auto__ = function(state_28966){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28089__auto____1.call(this,state_28966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28089__auto____0;
cljs$core$async$reduce_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28089__auto____1;
return cljs$core$async$reduce_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__))
})();
var state__28202__auto__ = (function (){var statearr_28988 = f__28201__auto__.call(null);
(statearr_28988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_28988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__))
);

return c__28200__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__,f__$1){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__,f__$1){
return (function (state_29020){
var state_val_29021 = (state_29020[(1)]);
if((state_val_29021 === (1))){
var inst_29015 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29020__$1 = state_29020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29020__$1,(2),inst_29015);
} else {
if((state_val_29021 === (2))){
var inst_29017 = (state_29020[(2)]);
var inst_29018 = f__$1.call(null,inst_29017);
var state_29020__$1 = state_29020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29020__$1,inst_29018);
} else {
return null;
}
}
});})(c__28200__auto__,f__$1))
;
return ((function (switch__28088__auto__,c__28200__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28089__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28089__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null];
(statearr_29025[(0)] = cljs$core$async$transduce_$_state_machine__28089__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var cljs$core$async$transduce_$_state_machine__28089__auto____1 = (function (state_29020){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_29020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__28092__auto__ = e29026;
var statearr_29027_29029 = state_29020;
(statearr_29027_29029[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29030 = state_29020;
state_29020 = G__29030;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28089__auto__ = function(state_29020){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28089__auto____1.call(this,state_29020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28089__auto____0;
cljs$core$async$transduce_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28089__auto____1;
return cljs$core$async$transduce_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__,f__$1))
})();
var state__28202__auto__ = (function (){var statearr_29028 = f__28201__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__,f__$1))
);

return c__28200__auto__;
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
var args29031 = [];
var len__27054__auto___29083 = arguments.length;
var i__27055__auto___29084 = (0);
while(true){
if((i__27055__auto___29084 < len__27054__auto___29083)){
args29031.push((arguments[i__27055__auto___29084]));

var G__29085 = (i__27055__auto___29084 + (1));
i__27055__auto___29084 = G__29085;
continue;
} else {
}
break;
}

var G__29033 = args29031.length;
switch (G__29033) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29031.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__){
return (function (state_29058){
var state_val_29059 = (state_29058[(1)]);
if((state_val_29059 === (7))){
var inst_29040 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
var statearr_29060_29087 = state_29058__$1;
(statearr_29060_29087[(2)] = inst_29040);

(statearr_29060_29087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (1))){
var inst_29034 = cljs.core.seq.call(null,coll);
var inst_29035 = inst_29034;
var state_29058__$1 = (function (){var statearr_29061 = state_29058;
(statearr_29061[(7)] = inst_29035);

return statearr_29061;
})();
var statearr_29062_29088 = state_29058__$1;
(statearr_29062_29088[(2)] = null);

(statearr_29062_29088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (4))){
var inst_29035 = (state_29058[(7)]);
var inst_29038 = cljs.core.first.call(null,inst_29035);
var state_29058__$1 = state_29058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29058__$1,(7),ch,inst_29038);
} else {
if((state_val_29059 === (13))){
var inst_29052 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
var statearr_29063_29089 = state_29058__$1;
(statearr_29063_29089[(2)] = inst_29052);

(statearr_29063_29089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (6))){
var inst_29043 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
if(cljs.core.truth_(inst_29043)){
var statearr_29064_29090 = state_29058__$1;
(statearr_29064_29090[(1)] = (8));

} else {
var statearr_29065_29091 = state_29058__$1;
(statearr_29065_29091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (3))){
var inst_29056 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29058__$1,inst_29056);
} else {
if((state_val_29059 === (12))){
var state_29058__$1 = state_29058;
var statearr_29066_29092 = state_29058__$1;
(statearr_29066_29092[(2)] = null);

(statearr_29066_29092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (2))){
var inst_29035 = (state_29058[(7)]);
var state_29058__$1 = state_29058;
if(cljs.core.truth_(inst_29035)){
var statearr_29067_29093 = state_29058__$1;
(statearr_29067_29093[(1)] = (4));

} else {
var statearr_29068_29094 = state_29058__$1;
(statearr_29068_29094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (11))){
var inst_29049 = cljs.core.async.close_BANG_.call(null,ch);
var state_29058__$1 = state_29058;
var statearr_29069_29095 = state_29058__$1;
(statearr_29069_29095[(2)] = inst_29049);

(statearr_29069_29095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (9))){
var state_29058__$1 = state_29058;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29070_29096 = state_29058__$1;
(statearr_29070_29096[(1)] = (11));

} else {
var statearr_29071_29097 = state_29058__$1;
(statearr_29071_29097[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (5))){
var inst_29035 = (state_29058[(7)]);
var state_29058__$1 = state_29058;
var statearr_29072_29098 = state_29058__$1;
(statearr_29072_29098[(2)] = inst_29035);

(statearr_29072_29098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (10))){
var inst_29054 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
var statearr_29073_29099 = state_29058__$1;
(statearr_29073_29099[(2)] = inst_29054);

(statearr_29073_29099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (8))){
var inst_29035 = (state_29058[(7)]);
var inst_29045 = cljs.core.next.call(null,inst_29035);
var inst_29035__$1 = inst_29045;
var state_29058__$1 = (function (){var statearr_29074 = state_29058;
(statearr_29074[(7)] = inst_29035__$1);

return statearr_29074;
})();
var statearr_29075_29100 = state_29058__$1;
(statearr_29075_29100[(2)] = null);

(statearr_29075_29100[(1)] = (2));


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
});})(c__28200__auto__))
;
return ((function (switch__28088__auto__,c__28200__auto__){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_29079 = [null,null,null,null,null,null,null,null];
(statearr_29079[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_29079[(1)] = (1));

return statearr_29079;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_29058){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_29058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e29080){if((e29080 instanceof Object)){
var ex__28092__auto__ = e29080;
var statearr_29081_29101 = state_29058;
(statearr_29081_29101[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29102 = state_29058;
state_29058 = G__29102;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_29058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_29058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__))
})();
var state__28202__auto__ = (function (){var statearr_29082 = f__28201__auto__.call(null);
(statearr_29082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_29082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__))
);

return c__28200__auto__;
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
var x__26642__auto__ = (((_ == null))?null:_);
var m__26643__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,_);
} else {
var m__26643__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,_);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29328 = (function (mult,ch,cs,meta29329){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29329 = meta29329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29330,meta29329__$1){
var self__ = this;
var _29330__$1 = this;
return (new cljs.core.async.t_cljs$core$async29328(self__.mult,self__.ch,self__.cs,meta29329__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29330){
var self__ = this;
var _29330__$1 = this;
return self__.meta29329;
});})(cs))
;

cljs.core.async.t_cljs$core$async29328.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29328.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29328.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29328.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29328.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29328.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29329","meta29329",1118853439,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29328";

cljs.core.async.t_cljs$core$async29328.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29328");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29328 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29328(mult__$1,ch__$1,cs__$1,meta29329){
return (new cljs.core.async.t_cljs$core$async29328(mult__$1,ch__$1,cs__$1,meta29329));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29328(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28200__auto___29553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___29553,cs,m,dchan,dctr,done){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___29553,cs,m,dchan,dctr,done){
return (function (state_29465){
var state_val_29466 = (state_29465[(1)]);
if((state_val_29466 === (7))){
var inst_29461 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29467_29554 = state_29465__$1;
(statearr_29467_29554[(2)] = inst_29461);

(statearr_29467_29554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (20))){
var inst_29364 = (state_29465[(7)]);
var inst_29376 = cljs.core.first.call(null,inst_29364);
var inst_29377 = cljs.core.nth.call(null,inst_29376,(0),null);
var inst_29378 = cljs.core.nth.call(null,inst_29376,(1),null);
var state_29465__$1 = (function (){var statearr_29468 = state_29465;
(statearr_29468[(8)] = inst_29377);

return statearr_29468;
})();
if(cljs.core.truth_(inst_29378)){
var statearr_29469_29555 = state_29465__$1;
(statearr_29469_29555[(1)] = (22));

} else {
var statearr_29470_29556 = state_29465__$1;
(statearr_29470_29556[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (27))){
var inst_29408 = (state_29465[(9)]);
var inst_29333 = (state_29465[(10)]);
var inst_29413 = (state_29465[(11)]);
var inst_29406 = (state_29465[(12)]);
var inst_29413__$1 = cljs.core._nth.call(null,inst_29406,inst_29408);
var inst_29414 = cljs.core.async.put_BANG_.call(null,inst_29413__$1,inst_29333,done);
var state_29465__$1 = (function (){var statearr_29471 = state_29465;
(statearr_29471[(11)] = inst_29413__$1);

return statearr_29471;
})();
if(cljs.core.truth_(inst_29414)){
var statearr_29472_29557 = state_29465__$1;
(statearr_29472_29557[(1)] = (30));

} else {
var statearr_29473_29558 = state_29465__$1;
(statearr_29473_29558[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (1))){
var state_29465__$1 = state_29465;
var statearr_29474_29559 = state_29465__$1;
(statearr_29474_29559[(2)] = null);

(statearr_29474_29559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (24))){
var inst_29364 = (state_29465[(7)]);
var inst_29383 = (state_29465[(2)]);
var inst_29384 = cljs.core.next.call(null,inst_29364);
var inst_29342 = inst_29384;
var inst_29343 = null;
var inst_29344 = (0);
var inst_29345 = (0);
var state_29465__$1 = (function (){var statearr_29475 = state_29465;
(statearr_29475[(13)] = inst_29383);

(statearr_29475[(14)] = inst_29344);

(statearr_29475[(15)] = inst_29343);

(statearr_29475[(16)] = inst_29345);

(statearr_29475[(17)] = inst_29342);

return statearr_29475;
})();
var statearr_29476_29560 = state_29465__$1;
(statearr_29476_29560[(2)] = null);

(statearr_29476_29560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (39))){
var state_29465__$1 = state_29465;
var statearr_29480_29561 = state_29465__$1;
(statearr_29480_29561[(2)] = null);

(statearr_29480_29561[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (4))){
var inst_29333 = (state_29465[(10)]);
var inst_29333__$1 = (state_29465[(2)]);
var inst_29334 = (inst_29333__$1 == null);
var state_29465__$1 = (function (){var statearr_29481 = state_29465;
(statearr_29481[(10)] = inst_29333__$1);

return statearr_29481;
})();
if(cljs.core.truth_(inst_29334)){
var statearr_29482_29562 = state_29465__$1;
(statearr_29482_29562[(1)] = (5));

} else {
var statearr_29483_29563 = state_29465__$1;
(statearr_29483_29563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (15))){
var inst_29344 = (state_29465[(14)]);
var inst_29343 = (state_29465[(15)]);
var inst_29345 = (state_29465[(16)]);
var inst_29342 = (state_29465[(17)]);
var inst_29360 = (state_29465[(2)]);
var inst_29361 = (inst_29345 + (1));
var tmp29477 = inst_29344;
var tmp29478 = inst_29343;
var tmp29479 = inst_29342;
var inst_29342__$1 = tmp29479;
var inst_29343__$1 = tmp29478;
var inst_29344__$1 = tmp29477;
var inst_29345__$1 = inst_29361;
var state_29465__$1 = (function (){var statearr_29484 = state_29465;
(statearr_29484[(14)] = inst_29344__$1);

(statearr_29484[(18)] = inst_29360);

(statearr_29484[(15)] = inst_29343__$1);

(statearr_29484[(16)] = inst_29345__$1);

(statearr_29484[(17)] = inst_29342__$1);

return statearr_29484;
})();
var statearr_29485_29564 = state_29465__$1;
(statearr_29485_29564[(2)] = null);

(statearr_29485_29564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (21))){
var inst_29387 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29489_29565 = state_29465__$1;
(statearr_29489_29565[(2)] = inst_29387);

(statearr_29489_29565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (31))){
var inst_29413 = (state_29465[(11)]);
var inst_29417 = done.call(null,null);
var inst_29418 = cljs.core.async.untap_STAR_.call(null,m,inst_29413);
var state_29465__$1 = (function (){var statearr_29490 = state_29465;
(statearr_29490[(19)] = inst_29417);

return statearr_29490;
})();
var statearr_29491_29566 = state_29465__$1;
(statearr_29491_29566[(2)] = inst_29418);

(statearr_29491_29566[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (32))){
var inst_29407 = (state_29465[(20)]);
var inst_29408 = (state_29465[(9)]);
var inst_29406 = (state_29465[(12)]);
var inst_29405 = (state_29465[(21)]);
var inst_29420 = (state_29465[(2)]);
var inst_29421 = (inst_29408 + (1));
var tmp29486 = inst_29407;
var tmp29487 = inst_29406;
var tmp29488 = inst_29405;
var inst_29405__$1 = tmp29488;
var inst_29406__$1 = tmp29487;
var inst_29407__$1 = tmp29486;
var inst_29408__$1 = inst_29421;
var state_29465__$1 = (function (){var statearr_29492 = state_29465;
(statearr_29492[(20)] = inst_29407__$1);

(statearr_29492[(9)] = inst_29408__$1);

(statearr_29492[(12)] = inst_29406__$1);

(statearr_29492[(22)] = inst_29420);

(statearr_29492[(21)] = inst_29405__$1);

return statearr_29492;
})();
var statearr_29493_29567 = state_29465__$1;
(statearr_29493_29567[(2)] = null);

(statearr_29493_29567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (40))){
var inst_29433 = (state_29465[(23)]);
var inst_29437 = done.call(null,null);
var inst_29438 = cljs.core.async.untap_STAR_.call(null,m,inst_29433);
var state_29465__$1 = (function (){var statearr_29494 = state_29465;
(statearr_29494[(24)] = inst_29437);

return statearr_29494;
})();
var statearr_29495_29568 = state_29465__$1;
(statearr_29495_29568[(2)] = inst_29438);

(statearr_29495_29568[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (33))){
var inst_29424 = (state_29465[(25)]);
var inst_29426 = cljs.core.chunked_seq_QMARK_.call(null,inst_29424);
var state_29465__$1 = state_29465;
if(inst_29426){
var statearr_29496_29569 = state_29465__$1;
(statearr_29496_29569[(1)] = (36));

} else {
var statearr_29497_29570 = state_29465__$1;
(statearr_29497_29570[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (13))){
var inst_29354 = (state_29465[(26)]);
var inst_29357 = cljs.core.async.close_BANG_.call(null,inst_29354);
var state_29465__$1 = state_29465;
var statearr_29498_29571 = state_29465__$1;
(statearr_29498_29571[(2)] = inst_29357);

(statearr_29498_29571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (22))){
var inst_29377 = (state_29465[(8)]);
var inst_29380 = cljs.core.async.close_BANG_.call(null,inst_29377);
var state_29465__$1 = state_29465;
var statearr_29499_29572 = state_29465__$1;
(statearr_29499_29572[(2)] = inst_29380);

(statearr_29499_29572[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (36))){
var inst_29424 = (state_29465[(25)]);
var inst_29428 = cljs.core.chunk_first.call(null,inst_29424);
var inst_29429 = cljs.core.chunk_rest.call(null,inst_29424);
var inst_29430 = cljs.core.count.call(null,inst_29428);
var inst_29405 = inst_29429;
var inst_29406 = inst_29428;
var inst_29407 = inst_29430;
var inst_29408 = (0);
var state_29465__$1 = (function (){var statearr_29500 = state_29465;
(statearr_29500[(20)] = inst_29407);

(statearr_29500[(9)] = inst_29408);

(statearr_29500[(12)] = inst_29406);

(statearr_29500[(21)] = inst_29405);

return statearr_29500;
})();
var statearr_29501_29573 = state_29465__$1;
(statearr_29501_29573[(2)] = null);

(statearr_29501_29573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (41))){
var inst_29424 = (state_29465[(25)]);
var inst_29440 = (state_29465[(2)]);
var inst_29441 = cljs.core.next.call(null,inst_29424);
var inst_29405 = inst_29441;
var inst_29406 = null;
var inst_29407 = (0);
var inst_29408 = (0);
var state_29465__$1 = (function (){var statearr_29502 = state_29465;
(statearr_29502[(20)] = inst_29407);

(statearr_29502[(9)] = inst_29408);

(statearr_29502[(12)] = inst_29406);

(statearr_29502[(27)] = inst_29440);

(statearr_29502[(21)] = inst_29405);

return statearr_29502;
})();
var statearr_29503_29574 = state_29465__$1;
(statearr_29503_29574[(2)] = null);

(statearr_29503_29574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (43))){
var state_29465__$1 = state_29465;
var statearr_29504_29575 = state_29465__$1;
(statearr_29504_29575[(2)] = null);

(statearr_29504_29575[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (29))){
var inst_29449 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29505_29576 = state_29465__$1;
(statearr_29505_29576[(2)] = inst_29449);

(statearr_29505_29576[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (44))){
var inst_29458 = (state_29465[(2)]);
var state_29465__$1 = (function (){var statearr_29506 = state_29465;
(statearr_29506[(28)] = inst_29458);

return statearr_29506;
})();
var statearr_29507_29577 = state_29465__$1;
(statearr_29507_29577[(2)] = null);

(statearr_29507_29577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (6))){
var inst_29397 = (state_29465[(29)]);
var inst_29396 = cljs.core.deref.call(null,cs);
var inst_29397__$1 = cljs.core.keys.call(null,inst_29396);
var inst_29398 = cljs.core.count.call(null,inst_29397__$1);
var inst_29399 = cljs.core.reset_BANG_.call(null,dctr,inst_29398);
var inst_29404 = cljs.core.seq.call(null,inst_29397__$1);
var inst_29405 = inst_29404;
var inst_29406 = null;
var inst_29407 = (0);
var inst_29408 = (0);
var state_29465__$1 = (function (){var statearr_29508 = state_29465;
(statearr_29508[(20)] = inst_29407);

(statearr_29508[(29)] = inst_29397__$1);

(statearr_29508[(9)] = inst_29408);

(statearr_29508[(30)] = inst_29399);

(statearr_29508[(12)] = inst_29406);

(statearr_29508[(21)] = inst_29405);

return statearr_29508;
})();
var statearr_29509_29578 = state_29465__$1;
(statearr_29509_29578[(2)] = null);

(statearr_29509_29578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (28))){
var inst_29424 = (state_29465[(25)]);
var inst_29405 = (state_29465[(21)]);
var inst_29424__$1 = cljs.core.seq.call(null,inst_29405);
var state_29465__$1 = (function (){var statearr_29510 = state_29465;
(statearr_29510[(25)] = inst_29424__$1);

return statearr_29510;
})();
if(inst_29424__$1){
var statearr_29511_29579 = state_29465__$1;
(statearr_29511_29579[(1)] = (33));

} else {
var statearr_29512_29580 = state_29465__$1;
(statearr_29512_29580[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (25))){
var inst_29407 = (state_29465[(20)]);
var inst_29408 = (state_29465[(9)]);
var inst_29410 = (inst_29408 < inst_29407);
var inst_29411 = inst_29410;
var state_29465__$1 = state_29465;
if(cljs.core.truth_(inst_29411)){
var statearr_29513_29581 = state_29465__$1;
(statearr_29513_29581[(1)] = (27));

} else {
var statearr_29514_29582 = state_29465__$1;
(statearr_29514_29582[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (34))){
var state_29465__$1 = state_29465;
var statearr_29515_29583 = state_29465__$1;
(statearr_29515_29583[(2)] = null);

(statearr_29515_29583[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (17))){
var state_29465__$1 = state_29465;
var statearr_29516_29584 = state_29465__$1;
(statearr_29516_29584[(2)] = null);

(statearr_29516_29584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (3))){
var inst_29463 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29465__$1,inst_29463);
} else {
if((state_val_29466 === (12))){
var inst_29392 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29517_29585 = state_29465__$1;
(statearr_29517_29585[(2)] = inst_29392);

(statearr_29517_29585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (2))){
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29465__$1,(4),ch);
} else {
if((state_val_29466 === (23))){
var state_29465__$1 = state_29465;
var statearr_29518_29586 = state_29465__$1;
(statearr_29518_29586[(2)] = null);

(statearr_29518_29586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (35))){
var inst_29447 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29519_29587 = state_29465__$1;
(statearr_29519_29587[(2)] = inst_29447);

(statearr_29519_29587[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (19))){
var inst_29364 = (state_29465[(7)]);
var inst_29368 = cljs.core.chunk_first.call(null,inst_29364);
var inst_29369 = cljs.core.chunk_rest.call(null,inst_29364);
var inst_29370 = cljs.core.count.call(null,inst_29368);
var inst_29342 = inst_29369;
var inst_29343 = inst_29368;
var inst_29344 = inst_29370;
var inst_29345 = (0);
var state_29465__$1 = (function (){var statearr_29520 = state_29465;
(statearr_29520[(14)] = inst_29344);

(statearr_29520[(15)] = inst_29343);

(statearr_29520[(16)] = inst_29345);

(statearr_29520[(17)] = inst_29342);

return statearr_29520;
})();
var statearr_29521_29588 = state_29465__$1;
(statearr_29521_29588[(2)] = null);

(statearr_29521_29588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (11))){
var inst_29364 = (state_29465[(7)]);
var inst_29342 = (state_29465[(17)]);
var inst_29364__$1 = cljs.core.seq.call(null,inst_29342);
var state_29465__$1 = (function (){var statearr_29522 = state_29465;
(statearr_29522[(7)] = inst_29364__$1);

return statearr_29522;
})();
if(inst_29364__$1){
var statearr_29523_29589 = state_29465__$1;
(statearr_29523_29589[(1)] = (16));

} else {
var statearr_29524_29590 = state_29465__$1;
(statearr_29524_29590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (9))){
var inst_29394 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29525_29591 = state_29465__$1;
(statearr_29525_29591[(2)] = inst_29394);

(statearr_29525_29591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (5))){
var inst_29340 = cljs.core.deref.call(null,cs);
var inst_29341 = cljs.core.seq.call(null,inst_29340);
var inst_29342 = inst_29341;
var inst_29343 = null;
var inst_29344 = (0);
var inst_29345 = (0);
var state_29465__$1 = (function (){var statearr_29526 = state_29465;
(statearr_29526[(14)] = inst_29344);

(statearr_29526[(15)] = inst_29343);

(statearr_29526[(16)] = inst_29345);

(statearr_29526[(17)] = inst_29342);

return statearr_29526;
})();
var statearr_29527_29592 = state_29465__$1;
(statearr_29527_29592[(2)] = null);

(statearr_29527_29592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (14))){
var state_29465__$1 = state_29465;
var statearr_29528_29593 = state_29465__$1;
(statearr_29528_29593[(2)] = null);

(statearr_29528_29593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (45))){
var inst_29455 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29529_29594 = state_29465__$1;
(statearr_29529_29594[(2)] = inst_29455);

(statearr_29529_29594[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (26))){
var inst_29397 = (state_29465[(29)]);
var inst_29451 = (state_29465[(2)]);
var inst_29452 = cljs.core.seq.call(null,inst_29397);
var state_29465__$1 = (function (){var statearr_29530 = state_29465;
(statearr_29530[(31)] = inst_29451);

return statearr_29530;
})();
if(inst_29452){
var statearr_29531_29595 = state_29465__$1;
(statearr_29531_29595[(1)] = (42));

} else {
var statearr_29532_29596 = state_29465__$1;
(statearr_29532_29596[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (16))){
var inst_29364 = (state_29465[(7)]);
var inst_29366 = cljs.core.chunked_seq_QMARK_.call(null,inst_29364);
var state_29465__$1 = state_29465;
if(inst_29366){
var statearr_29533_29597 = state_29465__$1;
(statearr_29533_29597[(1)] = (19));

} else {
var statearr_29534_29598 = state_29465__$1;
(statearr_29534_29598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (38))){
var inst_29444 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29535_29599 = state_29465__$1;
(statearr_29535_29599[(2)] = inst_29444);

(statearr_29535_29599[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (30))){
var state_29465__$1 = state_29465;
var statearr_29536_29600 = state_29465__$1;
(statearr_29536_29600[(2)] = null);

(statearr_29536_29600[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (10))){
var inst_29343 = (state_29465[(15)]);
var inst_29345 = (state_29465[(16)]);
var inst_29353 = cljs.core._nth.call(null,inst_29343,inst_29345);
var inst_29354 = cljs.core.nth.call(null,inst_29353,(0),null);
var inst_29355 = cljs.core.nth.call(null,inst_29353,(1),null);
var state_29465__$1 = (function (){var statearr_29537 = state_29465;
(statearr_29537[(26)] = inst_29354);

return statearr_29537;
})();
if(cljs.core.truth_(inst_29355)){
var statearr_29538_29601 = state_29465__$1;
(statearr_29538_29601[(1)] = (13));

} else {
var statearr_29539_29602 = state_29465__$1;
(statearr_29539_29602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (18))){
var inst_29390 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29540_29603 = state_29465__$1;
(statearr_29540_29603[(2)] = inst_29390);

(statearr_29540_29603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (42))){
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29465__$1,(45),dchan);
} else {
if((state_val_29466 === (37))){
var inst_29424 = (state_29465[(25)]);
var inst_29333 = (state_29465[(10)]);
var inst_29433 = (state_29465[(23)]);
var inst_29433__$1 = cljs.core.first.call(null,inst_29424);
var inst_29434 = cljs.core.async.put_BANG_.call(null,inst_29433__$1,inst_29333,done);
var state_29465__$1 = (function (){var statearr_29541 = state_29465;
(statearr_29541[(23)] = inst_29433__$1);

return statearr_29541;
})();
if(cljs.core.truth_(inst_29434)){
var statearr_29542_29604 = state_29465__$1;
(statearr_29542_29604[(1)] = (39));

} else {
var statearr_29543_29605 = state_29465__$1;
(statearr_29543_29605[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (8))){
var inst_29344 = (state_29465[(14)]);
var inst_29345 = (state_29465[(16)]);
var inst_29347 = (inst_29345 < inst_29344);
var inst_29348 = inst_29347;
var state_29465__$1 = state_29465;
if(cljs.core.truth_(inst_29348)){
var statearr_29544_29606 = state_29465__$1;
(statearr_29544_29606[(1)] = (10));

} else {
var statearr_29545_29607 = state_29465__$1;
(statearr_29545_29607[(1)] = (11));

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
});})(c__28200__auto___29553,cs,m,dchan,dctr,done))
;
return ((function (switch__28088__auto__,c__28200__auto___29553,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28089__auto__ = null;
var cljs$core$async$mult_$_state_machine__28089__auto____0 = (function (){
var statearr_29549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29549[(0)] = cljs$core$async$mult_$_state_machine__28089__auto__);

(statearr_29549[(1)] = (1));

return statearr_29549;
});
var cljs$core$async$mult_$_state_machine__28089__auto____1 = (function (state_29465){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_29465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e29550){if((e29550 instanceof Object)){
var ex__28092__auto__ = e29550;
var statearr_29551_29608 = state_29465;
(statearr_29551_29608[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29609 = state_29465;
state_29465 = G__29609;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28089__auto__ = function(state_29465){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28089__auto____1.call(this,state_29465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28089__auto____0;
cljs$core$async$mult_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28089__auto____1;
return cljs$core$async$mult_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___29553,cs,m,dchan,dctr,done))
})();
var state__28202__auto__ = (function (){var statearr_29552 = f__28201__auto__.call(null);
(statearr_29552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___29553);

return statearr_29552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___29553,cs,m,dchan,dctr,done))
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
var args29610 = [];
var len__27054__auto___29613 = arguments.length;
var i__27055__auto___29614 = (0);
while(true){
if((i__27055__auto___29614 < len__27054__auto___29613)){
args29610.push((arguments[i__27055__auto___29614]));

var G__29615 = (i__27055__auto___29614 + (1));
i__27055__auto___29614 = G__29615;
continue;
} else {
}
break;
}

var G__29612 = args29610.length;
switch (G__29612) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29610.length)].join('')));

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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,state_map);
} else {
var m__26643__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,state_map);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,mode);
} else {
var m__26643__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___29627 = arguments.length;
var i__27055__auto___29628 = (0);
while(true){
if((i__27055__auto___29628 < len__27054__auto___29627)){
args__27061__auto__.push((arguments[i__27055__auto___29628]));

var G__29629 = (i__27055__auto___29628 + (1));
i__27055__auto___29628 = G__29629;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29621){
var map__29622 = p__29621;
var map__29622__$1 = ((((!((map__29622 == null)))?((((map__29622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29622):map__29622);
var opts = map__29622__$1;
var statearr_29624_29630 = state;
(statearr_29624_29630[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29622,map__29622__$1,opts){
return (function (val){
var statearr_29625_29631 = state;
(statearr_29625_29631[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29622,map__29622__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29626_29632 = state;
(statearr_29626_29632[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29617){
var G__29618 = cljs.core.first.call(null,seq29617);
var seq29617__$1 = cljs.core.next.call(null,seq29617);
var G__29619 = cljs.core.first.call(null,seq29617__$1);
var seq29617__$2 = cljs.core.next.call(null,seq29617__$1);
var G__29620 = cljs.core.first.call(null,seq29617__$2);
var seq29617__$3 = cljs.core.next.call(null,seq29617__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29618,G__29619,G__29620,seq29617__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29798 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29799){
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
this.meta29799 = meta29799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29800,meta29799__$1){
var self__ = this;
var _29800__$1 = this;
return (new cljs.core.async.t_cljs$core$async29798(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29799__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29800){
var self__ = this;
var _29800__$1 = this;
return self__.meta29799;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29798.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29799","meta29799",-832385796,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29798";

cljs.core.async.t_cljs$core$async29798.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29798");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29798 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29798(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29799){
return (new cljs.core.async.t_cljs$core$async29798(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29799));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29798(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28200__auto___29963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___29963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___29963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29900){
var state_val_29901 = (state_29900[(1)]);
if((state_val_29901 === (7))){
var inst_29816 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29902_29964 = state_29900__$1;
(statearr_29902_29964[(2)] = inst_29816);

(statearr_29902_29964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (20))){
var inst_29828 = (state_29900[(7)]);
var state_29900__$1 = state_29900;
var statearr_29903_29965 = state_29900__$1;
(statearr_29903_29965[(2)] = inst_29828);

(statearr_29903_29965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (27))){
var state_29900__$1 = state_29900;
var statearr_29904_29966 = state_29900__$1;
(statearr_29904_29966[(2)] = null);

(statearr_29904_29966[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (1))){
var inst_29804 = (state_29900[(8)]);
var inst_29804__$1 = calc_state.call(null);
var inst_29806 = (inst_29804__$1 == null);
var inst_29807 = cljs.core.not.call(null,inst_29806);
var state_29900__$1 = (function (){var statearr_29905 = state_29900;
(statearr_29905[(8)] = inst_29804__$1);

return statearr_29905;
})();
if(inst_29807){
var statearr_29906_29967 = state_29900__$1;
(statearr_29906_29967[(1)] = (2));

} else {
var statearr_29907_29968 = state_29900__$1;
(statearr_29907_29968[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (24))){
var inst_29851 = (state_29900[(9)]);
var inst_29860 = (state_29900[(10)]);
var inst_29874 = (state_29900[(11)]);
var inst_29874__$1 = inst_29851.call(null,inst_29860);
var state_29900__$1 = (function (){var statearr_29908 = state_29900;
(statearr_29908[(11)] = inst_29874__$1);

return statearr_29908;
})();
if(cljs.core.truth_(inst_29874__$1)){
var statearr_29909_29969 = state_29900__$1;
(statearr_29909_29969[(1)] = (29));

} else {
var statearr_29910_29970 = state_29900__$1;
(statearr_29910_29970[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (4))){
var inst_29819 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29819)){
var statearr_29911_29971 = state_29900__$1;
(statearr_29911_29971[(1)] = (8));

} else {
var statearr_29912_29972 = state_29900__$1;
(statearr_29912_29972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (15))){
var inst_29845 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29845)){
var statearr_29913_29973 = state_29900__$1;
(statearr_29913_29973[(1)] = (19));

} else {
var statearr_29914_29974 = state_29900__$1;
(statearr_29914_29974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (21))){
var inst_29850 = (state_29900[(12)]);
var inst_29850__$1 = (state_29900[(2)]);
var inst_29851 = cljs.core.get.call(null,inst_29850__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29852 = cljs.core.get.call(null,inst_29850__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29853 = cljs.core.get.call(null,inst_29850__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29900__$1 = (function (){var statearr_29915 = state_29900;
(statearr_29915[(12)] = inst_29850__$1);

(statearr_29915[(9)] = inst_29851);

(statearr_29915[(13)] = inst_29852);

return statearr_29915;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29900__$1,(22),inst_29853);
} else {
if((state_val_29901 === (31))){
var inst_29882 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29882)){
var statearr_29916_29975 = state_29900__$1;
(statearr_29916_29975[(1)] = (32));

} else {
var statearr_29917_29976 = state_29900__$1;
(statearr_29917_29976[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (32))){
var inst_29859 = (state_29900[(14)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29900__$1,(35),out,inst_29859);
} else {
if((state_val_29901 === (33))){
var inst_29850 = (state_29900[(12)]);
var inst_29828 = inst_29850;
var state_29900__$1 = (function (){var statearr_29918 = state_29900;
(statearr_29918[(7)] = inst_29828);

return statearr_29918;
})();
var statearr_29919_29977 = state_29900__$1;
(statearr_29919_29977[(2)] = null);

(statearr_29919_29977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (13))){
var inst_29828 = (state_29900[(7)]);
var inst_29835 = inst_29828.cljs$lang$protocol_mask$partition0$;
var inst_29836 = (inst_29835 & (64));
var inst_29837 = inst_29828.cljs$core$ISeq$;
var inst_29838 = (inst_29836) || (inst_29837);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29838)){
var statearr_29920_29978 = state_29900__$1;
(statearr_29920_29978[(1)] = (16));

} else {
var statearr_29921_29979 = state_29900__$1;
(statearr_29921_29979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (22))){
var inst_29859 = (state_29900[(14)]);
var inst_29860 = (state_29900[(10)]);
var inst_29858 = (state_29900[(2)]);
var inst_29859__$1 = cljs.core.nth.call(null,inst_29858,(0),null);
var inst_29860__$1 = cljs.core.nth.call(null,inst_29858,(1),null);
var inst_29861 = (inst_29859__$1 == null);
var inst_29862 = cljs.core._EQ_.call(null,inst_29860__$1,change);
var inst_29863 = (inst_29861) || (inst_29862);
var state_29900__$1 = (function (){var statearr_29922 = state_29900;
(statearr_29922[(14)] = inst_29859__$1);

(statearr_29922[(10)] = inst_29860__$1);

return statearr_29922;
})();
if(cljs.core.truth_(inst_29863)){
var statearr_29923_29980 = state_29900__$1;
(statearr_29923_29980[(1)] = (23));

} else {
var statearr_29924_29981 = state_29900__$1;
(statearr_29924_29981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (36))){
var inst_29850 = (state_29900[(12)]);
var inst_29828 = inst_29850;
var state_29900__$1 = (function (){var statearr_29925 = state_29900;
(statearr_29925[(7)] = inst_29828);

return statearr_29925;
})();
var statearr_29926_29982 = state_29900__$1;
(statearr_29926_29982[(2)] = null);

(statearr_29926_29982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (29))){
var inst_29874 = (state_29900[(11)]);
var state_29900__$1 = state_29900;
var statearr_29927_29983 = state_29900__$1;
(statearr_29927_29983[(2)] = inst_29874);

(statearr_29927_29983[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (6))){
var state_29900__$1 = state_29900;
var statearr_29928_29984 = state_29900__$1;
(statearr_29928_29984[(2)] = false);

(statearr_29928_29984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (28))){
var inst_29870 = (state_29900[(2)]);
var inst_29871 = calc_state.call(null);
var inst_29828 = inst_29871;
var state_29900__$1 = (function (){var statearr_29929 = state_29900;
(statearr_29929[(15)] = inst_29870);

(statearr_29929[(7)] = inst_29828);

return statearr_29929;
})();
var statearr_29930_29985 = state_29900__$1;
(statearr_29930_29985[(2)] = null);

(statearr_29930_29985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (25))){
var inst_29896 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29931_29986 = state_29900__$1;
(statearr_29931_29986[(2)] = inst_29896);

(statearr_29931_29986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (34))){
var inst_29894 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29932_29987 = state_29900__$1;
(statearr_29932_29987[(2)] = inst_29894);

(statearr_29932_29987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (17))){
var state_29900__$1 = state_29900;
var statearr_29933_29988 = state_29900__$1;
(statearr_29933_29988[(2)] = false);

(statearr_29933_29988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (3))){
var state_29900__$1 = state_29900;
var statearr_29934_29989 = state_29900__$1;
(statearr_29934_29989[(2)] = false);

(statearr_29934_29989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (12))){
var inst_29898 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29900__$1,inst_29898);
} else {
if((state_val_29901 === (2))){
var inst_29804 = (state_29900[(8)]);
var inst_29809 = inst_29804.cljs$lang$protocol_mask$partition0$;
var inst_29810 = (inst_29809 & (64));
var inst_29811 = inst_29804.cljs$core$ISeq$;
var inst_29812 = (inst_29810) || (inst_29811);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29812)){
var statearr_29935_29990 = state_29900__$1;
(statearr_29935_29990[(1)] = (5));

} else {
var statearr_29936_29991 = state_29900__$1;
(statearr_29936_29991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (23))){
var inst_29859 = (state_29900[(14)]);
var inst_29865 = (inst_29859 == null);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29865)){
var statearr_29937_29992 = state_29900__$1;
(statearr_29937_29992[(1)] = (26));

} else {
var statearr_29938_29993 = state_29900__$1;
(statearr_29938_29993[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (35))){
var inst_29885 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29885)){
var statearr_29939_29994 = state_29900__$1;
(statearr_29939_29994[(1)] = (36));

} else {
var statearr_29940_29995 = state_29900__$1;
(statearr_29940_29995[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (19))){
var inst_29828 = (state_29900[(7)]);
var inst_29847 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29828);
var state_29900__$1 = state_29900;
var statearr_29941_29996 = state_29900__$1;
(statearr_29941_29996[(2)] = inst_29847);

(statearr_29941_29996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (11))){
var inst_29828 = (state_29900[(7)]);
var inst_29832 = (inst_29828 == null);
var inst_29833 = cljs.core.not.call(null,inst_29832);
var state_29900__$1 = state_29900;
if(inst_29833){
var statearr_29942_29997 = state_29900__$1;
(statearr_29942_29997[(1)] = (13));

} else {
var statearr_29943_29998 = state_29900__$1;
(statearr_29943_29998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (9))){
var inst_29804 = (state_29900[(8)]);
var state_29900__$1 = state_29900;
var statearr_29944_29999 = state_29900__$1;
(statearr_29944_29999[(2)] = inst_29804);

(statearr_29944_29999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (5))){
var state_29900__$1 = state_29900;
var statearr_29945_30000 = state_29900__$1;
(statearr_29945_30000[(2)] = true);

(statearr_29945_30000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (14))){
var state_29900__$1 = state_29900;
var statearr_29946_30001 = state_29900__$1;
(statearr_29946_30001[(2)] = false);

(statearr_29946_30001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (26))){
var inst_29860 = (state_29900[(10)]);
var inst_29867 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29860);
var state_29900__$1 = state_29900;
var statearr_29947_30002 = state_29900__$1;
(statearr_29947_30002[(2)] = inst_29867);

(statearr_29947_30002[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (16))){
var state_29900__$1 = state_29900;
var statearr_29948_30003 = state_29900__$1;
(statearr_29948_30003[(2)] = true);

(statearr_29948_30003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (38))){
var inst_29890 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29949_30004 = state_29900__$1;
(statearr_29949_30004[(2)] = inst_29890);

(statearr_29949_30004[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (30))){
var inst_29851 = (state_29900[(9)]);
var inst_29860 = (state_29900[(10)]);
var inst_29852 = (state_29900[(13)]);
var inst_29877 = cljs.core.empty_QMARK_.call(null,inst_29851);
var inst_29878 = inst_29852.call(null,inst_29860);
var inst_29879 = cljs.core.not.call(null,inst_29878);
var inst_29880 = (inst_29877) && (inst_29879);
var state_29900__$1 = state_29900;
var statearr_29950_30005 = state_29900__$1;
(statearr_29950_30005[(2)] = inst_29880);

(statearr_29950_30005[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (10))){
var inst_29804 = (state_29900[(8)]);
var inst_29824 = (state_29900[(2)]);
var inst_29825 = cljs.core.get.call(null,inst_29824,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29826 = cljs.core.get.call(null,inst_29824,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29827 = cljs.core.get.call(null,inst_29824,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29828 = inst_29804;
var state_29900__$1 = (function (){var statearr_29951 = state_29900;
(statearr_29951[(16)] = inst_29827);

(statearr_29951[(17)] = inst_29826);

(statearr_29951[(18)] = inst_29825);

(statearr_29951[(7)] = inst_29828);

return statearr_29951;
})();
var statearr_29952_30006 = state_29900__$1;
(statearr_29952_30006[(2)] = null);

(statearr_29952_30006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (18))){
var inst_29842 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29953_30007 = state_29900__$1;
(statearr_29953_30007[(2)] = inst_29842);

(statearr_29953_30007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (37))){
var state_29900__$1 = state_29900;
var statearr_29954_30008 = state_29900__$1;
(statearr_29954_30008[(2)] = null);

(statearr_29954_30008[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (8))){
var inst_29804 = (state_29900[(8)]);
var inst_29821 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29804);
var state_29900__$1 = state_29900;
var statearr_29955_30009 = state_29900__$1;
(statearr_29955_30009[(2)] = inst_29821);

(statearr_29955_30009[(1)] = (10));


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
});})(c__28200__auto___29963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28088__auto__,c__28200__auto___29963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28089__auto__ = null;
var cljs$core$async$mix_$_state_machine__28089__auto____0 = (function (){
var statearr_29959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29959[(0)] = cljs$core$async$mix_$_state_machine__28089__auto__);

(statearr_29959[(1)] = (1));

return statearr_29959;
});
var cljs$core$async$mix_$_state_machine__28089__auto____1 = (function (state_29900){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_29900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e29960){if((e29960 instanceof Object)){
var ex__28092__auto__ = e29960;
var statearr_29961_30010 = state_29900;
(statearr_29961_30010[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30011 = state_29900;
state_29900 = G__30011;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28089__auto__ = function(state_29900){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28089__auto____1.call(this,state_29900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28089__auto____0;
cljs$core$async$mix_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28089__auto____1;
return cljs$core$async$mix_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___29963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28202__auto__ = (function (){var statearr_29962 = f__28201__auto__.call(null);
(statearr_29962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___29963);

return statearr_29962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___29963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30012 = [];
var len__27054__auto___30015 = arguments.length;
var i__27055__auto___30016 = (0);
while(true){
if((i__27055__auto___30016 < len__27054__auto___30015)){
args30012.push((arguments[i__27055__auto___30016]));

var G__30017 = (i__27055__auto___30016 + (1));
i__27055__auto___30016 = G__30017;
continue;
} else {
}
break;
}

var G__30014 = args30012.length;
switch (G__30014) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30012.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p);
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
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v);
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
var args30020 = [];
var len__27054__auto___30145 = arguments.length;
var i__27055__auto___30146 = (0);
while(true){
if((i__27055__auto___30146 < len__27054__auto___30145)){
args30020.push((arguments[i__27055__auto___30146]));

var G__30147 = (i__27055__auto___30146 + (1));
i__27055__auto___30146 = G__30147;
continue;
} else {
}
break;
}

var G__30022 = args30020.length;
switch (G__30022) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30020.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25979__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25979__auto__,mults){
return (function (p1__30019_SHARP_){
if(cljs.core.truth_(p1__30019_SHARP_.call(null,topic))){
return p1__30019_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30019_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30023 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30024){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30024 = meta30024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30025,meta30024__$1){
var self__ = this;
var _30025__$1 = this;
return (new cljs.core.async.t_cljs$core$async30023(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30024__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30025){
var self__ = this;
var _30025__$1 = this;
return self__.meta30024;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30023.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30024","meta30024",-144604471,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30023";

cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30023");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30023 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30023(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30024){
return (new cljs.core.async.t_cljs$core$async30023(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30024));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30023(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28200__auto___30149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___30149,mults,ensure_mult,p){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___30149,mults,ensure_mult,p){
return (function (state_30097){
var state_val_30098 = (state_30097[(1)]);
if((state_val_30098 === (7))){
var inst_30093 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
var statearr_30099_30150 = state_30097__$1;
(statearr_30099_30150[(2)] = inst_30093);

(statearr_30099_30150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (20))){
var state_30097__$1 = state_30097;
var statearr_30100_30151 = state_30097__$1;
(statearr_30100_30151[(2)] = null);

(statearr_30100_30151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (1))){
var state_30097__$1 = state_30097;
var statearr_30101_30152 = state_30097__$1;
(statearr_30101_30152[(2)] = null);

(statearr_30101_30152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (24))){
var inst_30076 = (state_30097[(7)]);
var inst_30085 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30076);
var state_30097__$1 = state_30097;
var statearr_30102_30153 = state_30097__$1;
(statearr_30102_30153[(2)] = inst_30085);

(statearr_30102_30153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (4))){
var inst_30028 = (state_30097[(8)]);
var inst_30028__$1 = (state_30097[(2)]);
var inst_30029 = (inst_30028__$1 == null);
var state_30097__$1 = (function (){var statearr_30103 = state_30097;
(statearr_30103[(8)] = inst_30028__$1);

return statearr_30103;
})();
if(cljs.core.truth_(inst_30029)){
var statearr_30104_30154 = state_30097__$1;
(statearr_30104_30154[(1)] = (5));

} else {
var statearr_30105_30155 = state_30097__$1;
(statearr_30105_30155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (15))){
var inst_30070 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
var statearr_30106_30156 = state_30097__$1;
(statearr_30106_30156[(2)] = inst_30070);

(statearr_30106_30156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (21))){
var inst_30090 = (state_30097[(2)]);
var state_30097__$1 = (function (){var statearr_30107 = state_30097;
(statearr_30107[(9)] = inst_30090);

return statearr_30107;
})();
var statearr_30108_30157 = state_30097__$1;
(statearr_30108_30157[(2)] = null);

(statearr_30108_30157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (13))){
var inst_30052 = (state_30097[(10)]);
var inst_30054 = cljs.core.chunked_seq_QMARK_.call(null,inst_30052);
var state_30097__$1 = state_30097;
if(inst_30054){
var statearr_30109_30158 = state_30097__$1;
(statearr_30109_30158[(1)] = (16));

} else {
var statearr_30110_30159 = state_30097__$1;
(statearr_30110_30159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (22))){
var inst_30082 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
if(cljs.core.truth_(inst_30082)){
var statearr_30111_30160 = state_30097__$1;
(statearr_30111_30160[(1)] = (23));

} else {
var statearr_30112_30161 = state_30097__$1;
(statearr_30112_30161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (6))){
var inst_30078 = (state_30097[(11)]);
var inst_30028 = (state_30097[(8)]);
var inst_30076 = (state_30097[(7)]);
var inst_30076__$1 = topic_fn.call(null,inst_30028);
var inst_30077 = cljs.core.deref.call(null,mults);
var inst_30078__$1 = cljs.core.get.call(null,inst_30077,inst_30076__$1);
var state_30097__$1 = (function (){var statearr_30113 = state_30097;
(statearr_30113[(11)] = inst_30078__$1);

(statearr_30113[(7)] = inst_30076__$1);

return statearr_30113;
})();
if(cljs.core.truth_(inst_30078__$1)){
var statearr_30114_30162 = state_30097__$1;
(statearr_30114_30162[(1)] = (19));

} else {
var statearr_30115_30163 = state_30097__$1;
(statearr_30115_30163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (25))){
var inst_30087 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
var statearr_30116_30164 = state_30097__$1;
(statearr_30116_30164[(2)] = inst_30087);

(statearr_30116_30164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (17))){
var inst_30052 = (state_30097[(10)]);
var inst_30061 = cljs.core.first.call(null,inst_30052);
var inst_30062 = cljs.core.async.muxch_STAR_.call(null,inst_30061);
var inst_30063 = cljs.core.async.close_BANG_.call(null,inst_30062);
var inst_30064 = cljs.core.next.call(null,inst_30052);
var inst_30038 = inst_30064;
var inst_30039 = null;
var inst_30040 = (0);
var inst_30041 = (0);
var state_30097__$1 = (function (){var statearr_30117 = state_30097;
(statearr_30117[(12)] = inst_30063);

(statearr_30117[(13)] = inst_30041);

(statearr_30117[(14)] = inst_30038);

(statearr_30117[(15)] = inst_30040);

(statearr_30117[(16)] = inst_30039);

return statearr_30117;
})();
var statearr_30118_30165 = state_30097__$1;
(statearr_30118_30165[(2)] = null);

(statearr_30118_30165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (3))){
var inst_30095 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30097__$1,inst_30095);
} else {
if((state_val_30098 === (12))){
var inst_30072 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
var statearr_30119_30166 = state_30097__$1;
(statearr_30119_30166[(2)] = inst_30072);

(statearr_30119_30166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (2))){
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30097__$1,(4),ch);
} else {
if((state_val_30098 === (23))){
var state_30097__$1 = state_30097;
var statearr_30120_30167 = state_30097__$1;
(statearr_30120_30167[(2)] = null);

(statearr_30120_30167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (19))){
var inst_30078 = (state_30097[(11)]);
var inst_30028 = (state_30097[(8)]);
var inst_30080 = cljs.core.async.muxch_STAR_.call(null,inst_30078);
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30097__$1,(22),inst_30080,inst_30028);
} else {
if((state_val_30098 === (11))){
var inst_30038 = (state_30097[(14)]);
var inst_30052 = (state_30097[(10)]);
var inst_30052__$1 = cljs.core.seq.call(null,inst_30038);
var state_30097__$1 = (function (){var statearr_30121 = state_30097;
(statearr_30121[(10)] = inst_30052__$1);

return statearr_30121;
})();
if(inst_30052__$1){
var statearr_30122_30168 = state_30097__$1;
(statearr_30122_30168[(1)] = (13));

} else {
var statearr_30123_30169 = state_30097__$1;
(statearr_30123_30169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (9))){
var inst_30074 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
var statearr_30124_30170 = state_30097__$1;
(statearr_30124_30170[(2)] = inst_30074);

(statearr_30124_30170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (5))){
var inst_30035 = cljs.core.deref.call(null,mults);
var inst_30036 = cljs.core.vals.call(null,inst_30035);
var inst_30037 = cljs.core.seq.call(null,inst_30036);
var inst_30038 = inst_30037;
var inst_30039 = null;
var inst_30040 = (0);
var inst_30041 = (0);
var state_30097__$1 = (function (){var statearr_30125 = state_30097;
(statearr_30125[(13)] = inst_30041);

(statearr_30125[(14)] = inst_30038);

(statearr_30125[(15)] = inst_30040);

(statearr_30125[(16)] = inst_30039);

return statearr_30125;
})();
var statearr_30126_30171 = state_30097__$1;
(statearr_30126_30171[(2)] = null);

(statearr_30126_30171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (14))){
var state_30097__$1 = state_30097;
var statearr_30130_30172 = state_30097__$1;
(statearr_30130_30172[(2)] = null);

(statearr_30130_30172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (16))){
var inst_30052 = (state_30097[(10)]);
var inst_30056 = cljs.core.chunk_first.call(null,inst_30052);
var inst_30057 = cljs.core.chunk_rest.call(null,inst_30052);
var inst_30058 = cljs.core.count.call(null,inst_30056);
var inst_30038 = inst_30057;
var inst_30039 = inst_30056;
var inst_30040 = inst_30058;
var inst_30041 = (0);
var state_30097__$1 = (function (){var statearr_30131 = state_30097;
(statearr_30131[(13)] = inst_30041);

(statearr_30131[(14)] = inst_30038);

(statearr_30131[(15)] = inst_30040);

(statearr_30131[(16)] = inst_30039);

return statearr_30131;
})();
var statearr_30132_30173 = state_30097__$1;
(statearr_30132_30173[(2)] = null);

(statearr_30132_30173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (10))){
var inst_30041 = (state_30097[(13)]);
var inst_30038 = (state_30097[(14)]);
var inst_30040 = (state_30097[(15)]);
var inst_30039 = (state_30097[(16)]);
var inst_30046 = cljs.core._nth.call(null,inst_30039,inst_30041);
var inst_30047 = cljs.core.async.muxch_STAR_.call(null,inst_30046);
var inst_30048 = cljs.core.async.close_BANG_.call(null,inst_30047);
var inst_30049 = (inst_30041 + (1));
var tmp30127 = inst_30038;
var tmp30128 = inst_30040;
var tmp30129 = inst_30039;
var inst_30038__$1 = tmp30127;
var inst_30039__$1 = tmp30129;
var inst_30040__$1 = tmp30128;
var inst_30041__$1 = inst_30049;
var state_30097__$1 = (function (){var statearr_30133 = state_30097;
(statearr_30133[(13)] = inst_30041__$1);

(statearr_30133[(14)] = inst_30038__$1);

(statearr_30133[(15)] = inst_30040__$1);

(statearr_30133[(16)] = inst_30039__$1);

(statearr_30133[(17)] = inst_30048);

return statearr_30133;
})();
var statearr_30134_30174 = state_30097__$1;
(statearr_30134_30174[(2)] = null);

(statearr_30134_30174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (18))){
var inst_30067 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
var statearr_30135_30175 = state_30097__$1;
(statearr_30135_30175[(2)] = inst_30067);

(statearr_30135_30175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (8))){
var inst_30041 = (state_30097[(13)]);
var inst_30040 = (state_30097[(15)]);
var inst_30043 = (inst_30041 < inst_30040);
var inst_30044 = inst_30043;
var state_30097__$1 = state_30097;
if(cljs.core.truth_(inst_30044)){
var statearr_30136_30176 = state_30097__$1;
(statearr_30136_30176[(1)] = (10));

} else {
var statearr_30137_30177 = state_30097__$1;
(statearr_30137_30177[(1)] = (11));

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
});})(c__28200__auto___30149,mults,ensure_mult,p))
;
return ((function (switch__28088__auto__,c__28200__auto___30149,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_30141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30141[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_30141[(1)] = (1));

return statearr_30141;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_30097){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e30142){if((e30142 instanceof Object)){
var ex__28092__auto__ = e30142;
var statearr_30143_30178 = state_30097;
(statearr_30143_30178[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30179 = state_30097;
state_30097 = G__30179;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_30097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_30097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___30149,mults,ensure_mult,p))
})();
var state__28202__auto__ = (function (){var statearr_30144 = f__28201__auto__.call(null);
(statearr_30144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___30149);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___30149,mults,ensure_mult,p))
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
var args30180 = [];
var len__27054__auto___30183 = arguments.length;
var i__27055__auto___30184 = (0);
while(true){
if((i__27055__auto___30184 < len__27054__auto___30183)){
args30180.push((arguments[i__27055__auto___30184]));

var G__30185 = (i__27055__auto___30184 + (1));
i__27055__auto___30184 = G__30185;
continue;
} else {
}
break;
}

var G__30182 = args30180.length;
switch (G__30182) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30180.length)].join('')));

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
var args30187 = [];
var len__27054__auto___30190 = arguments.length;
var i__27055__auto___30191 = (0);
while(true){
if((i__27055__auto___30191 < len__27054__auto___30190)){
args30187.push((arguments[i__27055__auto___30191]));

var G__30192 = (i__27055__auto___30191 + (1));
i__27055__auto___30191 = G__30192;
continue;
} else {
}
break;
}

var G__30189 = args30187.length;
switch (G__30189) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30187.length)].join('')));

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
var args30194 = [];
var len__27054__auto___30265 = arguments.length;
var i__27055__auto___30266 = (0);
while(true){
if((i__27055__auto___30266 < len__27054__auto___30265)){
args30194.push((arguments[i__27055__auto___30266]));

var G__30267 = (i__27055__auto___30266 + (1));
i__27055__auto___30266 = G__30267;
continue;
} else {
}
break;
}

var G__30196 = args30194.length;
switch (G__30196) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30194.length)].join('')));

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
var c__28200__auto___30269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___30269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___30269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30235){
var state_val_30236 = (state_30235[(1)]);
if((state_val_30236 === (7))){
var state_30235__$1 = state_30235;
var statearr_30237_30270 = state_30235__$1;
(statearr_30237_30270[(2)] = null);

(statearr_30237_30270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (1))){
var state_30235__$1 = state_30235;
var statearr_30238_30271 = state_30235__$1;
(statearr_30238_30271[(2)] = null);

(statearr_30238_30271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (4))){
var inst_30199 = (state_30235[(7)]);
var inst_30201 = (inst_30199 < cnt);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30201)){
var statearr_30239_30272 = state_30235__$1;
(statearr_30239_30272[(1)] = (6));

} else {
var statearr_30240_30273 = state_30235__$1;
(statearr_30240_30273[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (15))){
var inst_30231 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30241_30274 = state_30235__$1;
(statearr_30241_30274[(2)] = inst_30231);

(statearr_30241_30274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (13))){
var inst_30224 = cljs.core.async.close_BANG_.call(null,out);
var state_30235__$1 = state_30235;
var statearr_30242_30275 = state_30235__$1;
(statearr_30242_30275[(2)] = inst_30224);

(statearr_30242_30275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (6))){
var state_30235__$1 = state_30235;
var statearr_30243_30276 = state_30235__$1;
(statearr_30243_30276[(2)] = null);

(statearr_30243_30276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (3))){
var inst_30233 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30235__$1,inst_30233);
} else {
if((state_val_30236 === (12))){
var inst_30221 = (state_30235[(8)]);
var inst_30221__$1 = (state_30235[(2)]);
var inst_30222 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30221__$1);
var state_30235__$1 = (function (){var statearr_30244 = state_30235;
(statearr_30244[(8)] = inst_30221__$1);

return statearr_30244;
})();
if(cljs.core.truth_(inst_30222)){
var statearr_30245_30277 = state_30235__$1;
(statearr_30245_30277[(1)] = (13));

} else {
var statearr_30246_30278 = state_30235__$1;
(statearr_30246_30278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (2))){
var inst_30198 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30199 = (0);
var state_30235__$1 = (function (){var statearr_30247 = state_30235;
(statearr_30247[(9)] = inst_30198);

(statearr_30247[(7)] = inst_30199);

return statearr_30247;
})();
var statearr_30248_30279 = state_30235__$1;
(statearr_30248_30279[(2)] = null);

(statearr_30248_30279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (11))){
var inst_30199 = (state_30235[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30235,(10),Object,null,(9));
var inst_30208 = chs__$1.call(null,inst_30199);
var inst_30209 = done.call(null,inst_30199);
var inst_30210 = cljs.core.async.take_BANG_.call(null,inst_30208,inst_30209);
var state_30235__$1 = state_30235;
var statearr_30249_30280 = state_30235__$1;
(statearr_30249_30280[(2)] = inst_30210);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30235__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (9))){
var inst_30199 = (state_30235[(7)]);
var inst_30212 = (state_30235[(2)]);
var inst_30213 = (inst_30199 + (1));
var inst_30199__$1 = inst_30213;
var state_30235__$1 = (function (){var statearr_30250 = state_30235;
(statearr_30250[(10)] = inst_30212);

(statearr_30250[(7)] = inst_30199__$1);

return statearr_30250;
})();
var statearr_30251_30281 = state_30235__$1;
(statearr_30251_30281[(2)] = null);

(statearr_30251_30281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (5))){
var inst_30219 = (state_30235[(2)]);
var state_30235__$1 = (function (){var statearr_30252 = state_30235;
(statearr_30252[(11)] = inst_30219);

return statearr_30252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(12),dchan);
} else {
if((state_val_30236 === (14))){
var inst_30221 = (state_30235[(8)]);
var inst_30226 = cljs.core.apply.call(null,f,inst_30221);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30235__$1,(16),out,inst_30226);
} else {
if((state_val_30236 === (16))){
var inst_30228 = (state_30235[(2)]);
var state_30235__$1 = (function (){var statearr_30253 = state_30235;
(statearr_30253[(12)] = inst_30228);

return statearr_30253;
})();
var statearr_30254_30282 = state_30235__$1;
(statearr_30254_30282[(2)] = null);

(statearr_30254_30282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (10))){
var inst_30203 = (state_30235[(2)]);
var inst_30204 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30235__$1 = (function (){var statearr_30255 = state_30235;
(statearr_30255[(13)] = inst_30203);

return statearr_30255;
})();
var statearr_30256_30283 = state_30235__$1;
(statearr_30256_30283[(2)] = inst_30204);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30235__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (8))){
var inst_30217 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30257_30284 = state_30235__$1;
(statearr_30257_30284[(2)] = inst_30217);

(statearr_30257_30284[(1)] = (5));


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
});})(c__28200__auto___30269,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28088__auto__,c__28200__auto___30269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_30261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30261[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_30261[(1)] = (1));

return statearr_30261;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_30235){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e30262){if((e30262 instanceof Object)){
var ex__28092__auto__ = e30262;
var statearr_30263_30285 = state_30235;
(statearr_30263_30285[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30286 = state_30235;
state_30235 = G__30286;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_30235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_30235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___30269,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28202__auto__ = (function (){var statearr_30264 = f__28201__auto__.call(null);
(statearr_30264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___30269);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___30269,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30288 = [];
var len__27054__auto___30346 = arguments.length;
var i__27055__auto___30347 = (0);
while(true){
if((i__27055__auto___30347 < len__27054__auto___30346)){
args30288.push((arguments[i__27055__auto___30347]));

var G__30348 = (i__27055__auto___30347 + (1));
i__27055__auto___30347 = G__30348;
continue;
} else {
}
break;
}

var G__30290 = args30288.length;
switch (G__30290) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30288.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28200__auto___30350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___30350,out){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___30350,out){
return (function (state_30322){
var state_val_30323 = (state_30322[(1)]);
if((state_val_30323 === (7))){
var inst_30301 = (state_30322[(7)]);
var inst_30302 = (state_30322[(8)]);
var inst_30301__$1 = (state_30322[(2)]);
var inst_30302__$1 = cljs.core.nth.call(null,inst_30301__$1,(0),null);
var inst_30303 = cljs.core.nth.call(null,inst_30301__$1,(1),null);
var inst_30304 = (inst_30302__$1 == null);
var state_30322__$1 = (function (){var statearr_30324 = state_30322;
(statearr_30324[(7)] = inst_30301__$1);

(statearr_30324[(9)] = inst_30303);

(statearr_30324[(8)] = inst_30302__$1);

return statearr_30324;
})();
if(cljs.core.truth_(inst_30304)){
var statearr_30325_30351 = state_30322__$1;
(statearr_30325_30351[(1)] = (8));

} else {
var statearr_30326_30352 = state_30322__$1;
(statearr_30326_30352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (1))){
var inst_30291 = cljs.core.vec.call(null,chs);
var inst_30292 = inst_30291;
var state_30322__$1 = (function (){var statearr_30327 = state_30322;
(statearr_30327[(10)] = inst_30292);

return statearr_30327;
})();
var statearr_30328_30353 = state_30322__$1;
(statearr_30328_30353[(2)] = null);

(statearr_30328_30353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (4))){
var inst_30292 = (state_30322[(10)]);
var state_30322__$1 = state_30322;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30322__$1,(7),inst_30292);
} else {
if((state_val_30323 === (6))){
var inst_30318 = (state_30322[(2)]);
var state_30322__$1 = state_30322;
var statearr_30329_30354 = state_30322__$1;
(statearr_30329_30354[(2)] = inst_30318);

(statearr_30329_30354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (3))){
var inst_30320 = (state_30322[(2)]);
var state_30322__$1 = state_30322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30322__$1,inst_30320);
} else {
if((state_val_30323 === (2))){
var inst_30292 = (state_30322[(10)]);
var inst_30294 = cljs.core.count.call(null,inst_30292);
var inst_30295 = (inst_30294 > (0));
var state_30322__$1 = state_30322;
if(cljs.core.truth_(inst_30295)){
var statearr_30331_30355 = state_30322__$1;
(statearr_30331_30355[(1)] = (4));

} else {
var statearr_30332_30356 = state_30322__$1;
(statearr_30332_30356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (11))){
var inst_30292 = (state_30322[(10)]);
var inst_30311 = (state_30322[(2)]);
var tmp30330 = inst_30292;
var inst_30292__$1 = tmp30330;
var state_30322__$1 = (function (){var statearr_30333 = state_30322;
(statearr_30333[(10)] = inst_30292__$1);

(statearr_30333[(11)] = inst_30311);

return statearr_30333;
})();
var statearr_30334_30357 = state_30322__$1;
(statearr_30334_30357[(2)] = null);

(statearr_30334_30357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (9))){
var inst_30302 = (state_30322[(8)]);
var state_30322__$1 = state_30322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30322__$1,(11),out,inst_30302);
} else {
if((state_val_30323 === (5))){
var inst_30316 = cljs.core.async.close_BANG_.call(null,out);
var state_30322__$1 = state_30322;
var statearr_30335_30358 = state_30322__$1;
(statearr_30335_30358[(2)] = inst_30316);

(statearr_30335_30358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (10))){
var inst_30314 = (state_30322[(2)]);
var state_30322__$1 = state_30322;
var statearr_30336_30359 = state_30322__$1;
(statearr_30336_30359[(2)] = inst_30314);

(statearr_30336_30359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (8))){
var inst_30301 = (state_30322[(7)]);
var inst_30303 = (state_30322[(9)]);
var inst_30292 = (state_30322[(10)]);
var inst_30302 = (state_30322[(8)]);
var inst_30306 = (function (){var cs = inst_30292;
var vec__30297 = inst_30301;
var v = inst_30302;
var c = inst_30303;
return ((function (cs,vec__30297,v,c,inst_30301,inst_30303,inst_30292,inst_30302,state_val_30323,c__28200__auto___30350,out){
return (function (p1__30287_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30287_SHARP_);
});
;})(cs,vec__30297,v,c,inst_30301,inst_30303,inst_30292,inst_30302,state_val_30323,c__28200__auto___30350,out))
})();
var inst_30307 = cljs.core.filterv.call(null,inst_30306,inst_30292);
var inst_30292__$1 = inst_30307;
var state_30322__$1 = (function (){var statearr_30337 = state_30322;
(statearr_30337[(10)] = inst_30292__$1);

return statearr_30337;
})();
var statearr_30338_30360 = state_30322__$1;
(statearr_30338_30360[(2)] = null);

(statearr_30338_30360[(1)] = (2));


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
});})(c__28200__auto___30350,out))
;
return ((function (switch__28088__auto__,c__28200__auto___30350,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_30342 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30342[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_30342[(1)] = (1));

return statearr_30342;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_30322){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e30343){if((e30343 instanceof Object)){
var ex__28092__auto__ = e30343;
var statearr_30344_30361 = state_30322;
(statearr_30344_30361[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30362 = state_30322;
state_30322 = G__30362;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_30322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_30322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___30350,out))
})();
var state__28202__auto__ = (function (){var statearr_30345 = f__28201__auto__.call(null);
(statearr_30345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___30350);

return statearr_30345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___30350,out))
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
var args30363 = [];
var len__27054__auto___30412 = arguments.length;
var i__27055__auto___30413 = (0);
while(true){
if((i__27055__auto___30413 < len__27054__auto___30412)){
args30363.push((arguments[i__27055__auto___30413]));

var G__30414 = (i__27055__auto___30413 + (1));
i__27055__auto___30413 = G__30414;
continue;
} else {
}
break;
}

var G__30365 = args30363.length;
switch (G__30365) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30363.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28200__auto___30416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___30416,out){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___30416,out){
return (function (state_30389){
var state_val_30390 = (state_30389[(1)]);
if((state_val_30390 === (7))){
var inst_30371 = (state_30389[(7)]);
var inst_30371__$1 = (state_30389[(2)]);
var inst_30372 = (inst_30371__$1 == null);
var inst_30373 = cljs.core.not.call(null,inst_30372);
var state_30389__$1 = (function (){var statearr_30391 = state_30389;
(statearr_30391[(7)] = inst_30371__$1);

return statearr_30391;
})();
if(inst_30373){
var statearr_30392_30417 = state_30389__$1;
(statearr_30392_30417[(1)] = (8));

} else {
var statearr_30393_30418 = state_30389__$1;
(statearr_30393_30418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (1))){
var inst_30366 = (0);
var state_30389__$1 = (function (){var statearr_30394 = state_30389;
(statearr_30394[(8)] = inst_30366);

return statearr_30394;
})();
var statearr_30395_30419 = state_30389__$1;
(statearr_30395_30419[(2)] = null);

(statearr_30395_30419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (4))){
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30389__$1,(7),ch);
} else {
if((state_val_30390 === (6))){
var inst_30384 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30396_30420 = state_30389__$1;
(statearr_30396_30420[(2)] = inst_30384);

(statearr_30396_30420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (3))){
var inst_30386 = (state_30389[(2)]);
var inst_30387 = cljs.core.async.close_BANG_.call(null,out);
var state_30389__$1 = (function (){var statearr_30397 = state_30389;
(statearr_30397[(9)] = inst_30386);

return statearr_30397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30389__$1,inst_30387);
} else {
if((state_val_30390 === (2))){
var inst_30366 = (state_30389[(8)]);
var inst_30368 = (inst_30366 < n);
var state_30389__$1 = state_30389;
if(cljs.core.truth_(inst_30368)){
var statearr_30398_30421 = state_30389__$1;
(statearr_30398_30421[(1)] = (4));

} else {
var statearr_30399_30422 = state_30389__$1;
(statearr_30399_30422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (11))){
var inst_30366 = (state_30389[(8)]);
var inst_30376 = (state_30389[(2)]);
var inst_30377 = (inst_30366 + (1));
var inst_30366__$1 = inst_30377;
var state_30389__$1 = (function (){var statearr_30400 = state_30389;
(statearr_30400[(10)] = inst_30376);

(statearr_30400[(8)] = inst_30366__$1);

return statearr_30400;
})();
var statearr_30401_30423 = state_30389__$1;
(statearr_30401_30423[(2)] = null);

(statearr_30401_30423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (9))){
var state_30389__$1 = state_30389;
var statearr_30402_30424 = state_30389__$1;
(statearr_30402_30424[(2)] = null);

(statearr_30402_30424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (5))){
var state_30389__$1 = state_30389;
var statearr_30403_30425 = state_30389__$1;
(statearr_30403_30425[(2)] = null);

(statearr_30403_30425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (10))){
var inst_30381 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30404_30426 = state_30389__$1;
(statearr_30404_30426[(2)] = inst_30381);

(statearr_30404_30426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (8))){
var inst_30371 = (state_30389[(7)]);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30389__$1,(11),out,inst_30371);
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
});})(c__28200__auto___30416,out))
;
return ((function (switch__28088__auto__,c__28200__auto___30416,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_30408 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30408[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_30408[(1)] = (1));

return statearr_30408;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_30389){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e30409){if((e30409 instanceof Object)){
var ex__28092__auto__ = e30409;
var statearr_30410_30427 = state_30389;
(statearr_30410_30427[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30428 = state_30389;
state_30389 = G__30428;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_30389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_30389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___30416,out))
})();
var state__28202__auto__ = (function (){var statearr_30411 = f__28201__auto__.call(null);
(statearr_30411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___30416);

return statearr_30411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___30416,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30436 = (function (map_LT_,f,ch,meta30437){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30437 = meta30437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30438,meta30437__$1){
var self__ = this;
var _30438__$1 = this;
return (new cljs.core.async.t_cljs$core$async30436(self__.map_LT_,self__.f,self__.ch,meta30437__$1));
});

cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30438){
var self__ = this;
var _30438__$1 = this;
return self__.meta30437;
});

cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30439 = (function (map_LT_,f,ch,meta30437,_,fn1,meta30440){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30437 = meta30437;
this._ = _;
this.fn1 = fn1;
this.meta30440 = meta30440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30441,meta30440__$1){
var self__ = this;
var _30441__$1 = this;
return (new cljs.core.async.t_cljs$core$async30439(self__.map_LT_,self__.f,self__.ch,self__.meta30437,self__._,self__.fn1,meta30440__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30441){
var self__ = this;
var _30441__$1 = this;
return self__.meta30440;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30429_SHARP_){
return f1.call(null,(((p1__30429_SHARP_ == null))?null:self__.f.call(null,p1__30429_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30439.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30437","meta30437",1976692194,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30436","cljs.core.async/t_cljs$core$async30436",475237884,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30440","meta30440",940484674,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30439";

cljs.core.async.t_cljs$core$async30439.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30439");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30439 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30439(map_LT___$1,f__$1,ch__$1,meta30437__$1,___$2,fn1__$1,meta30440){
return (new cljs.core.async.t_cljs$core$async30439(map_LT___$1,f__$1,ch__$1,meta30437__$1,___$2,fn1__$1,meta30440));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30439(self__.map_LT_,self__.f,self__.ch,self__.meta30437,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25967__auto__ = ret;
if(cljs.core.truth_(and__25967__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25967__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30437","meta30437",1976692194,null)], null);
});

cljs.core.async.t_cljs$core$async30436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30436";

cljs.core.async.t_cljs$core$async30436.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30436");
});

cljs.core.async.__GT_t_cljs$core$async30436 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30436(map_LT___$1,f__$1,ch__$1,meta30437){
return (new cljs.core.async.t_cljs$core$async30436(map_LT___$1,f__$1,ch__$1,meta30437));
});

}

return (new cljs.core.async.t_cljs$core$async30436(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30445 = (function (map_GT_,f,ch,meta30446){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30446 = meta30446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30447,meta30446__$1){
var self__ = this;
var _30447__$1 = this;
return (new cljs.core.async.t_cljs$core$async30445(self__.map_GT_,self__.f,self__.ch,meta30446__$1));
});

cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30447){
var self__ = this;
var _30447__$1 = this;
return self__.meta30446;
});

cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30446","meta30446",1492031811,null)], null);
});

cljs.core.async.t_cljs$core$async30445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30445";

cljs.core.async.t_cljs$core$async30445.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30445");
});

cljs.core.async.__GT_t_cljs$core$async30445 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30445(map_GT___$1,f__$1,ch__$1,meta30446){
return (new cljs.core.async.t_cljs$core$async30445(map_GT___$1,f__$1,ch__$1,meta30446));
});

}

return (new cljs.core.async.t_cljs$core$async30445(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30451 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30451 = (function (filter_GT_,p,ch,meta30452){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30452 = meta30452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30453,meta30452__$1){
var self__ = this;
var _30453__$1 = this;
return (new cljs.core.async.t_cljs$core$async30451(self__.filter_GT_,self__.p,self__.ch,meta30452__$1));
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30453){
var self__ = this;
var _30453__$1 = this;
return self__.meta30452;
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30452","meta30452",-1770994791,null)], null);
});

cljs.core.async.t_cljs$core$async30451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30451";

cljs.core.async.t_cljs$core$async30451.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30451");
});

cljs.core.async.__GT_t_cljs$core$async30451 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30451(filter_GT___$1,p__$1,ch__$1,meta30452){
return (new cljs.core.async.t_cljs$core$async30451(filter_GT___$1,p__$1,ch__$1,meta30452));
});

}

return (new cljs.core.async.t_cljs$core$async30451(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30454 = [];
var len__27054__auto___30498 = arguments.length;
var i__27055__auto___30499 = (0);
while(true){
if((i__27055__auto___30499 < len__27054__auto___30498)){
args30454.push((arguments[i__27055__auto___30499]));

var G__30500 = (i__27055__auto___30499 + (1));
i__27055__auto___30499 = G__30500;
continue;
} else {
}
break;
}

var G__30456 = args30454.length;
switch (G__30456) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30454.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28200__auto___30502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___30502,out){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___30502,out){
return (function (state_30477){
var state_val_30478 = (state_30477[(1)]);
if((state_val_30478 === (7))){
var inst_30473 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30479_30503 = state_30477__$1;
(statearr_30479_30503[(2)] = inst_30473);

(statearr_30479_30503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (1))){
var state_30477__$1 = state_30477;
var statearr_30480_30504 = state_30477__$1;
(statearr_30480_30504[(2)] = null);

(statearr_30480_30504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (4))){
var inst_30459 = (state_30477[(7)]);
var inst_30459__$1 = (state_30477[(2)]);
var inst_30460 = (inst_30459__$1 == null);
var state_30477__$1 = (function (){var statearr_30481 = state_30477;
(statearr_30481[(7)] = inst_30459__$1);

return statearr_30481;
})();
if(cljs.core.truth_(inst_30460)){
var statearr_30482_30505 = state_30477__$1;
(statearr_30482_30505[(1)] = (5));

} else {
var statearr_30483_30506 = state_30477__$1;
(statearr_30483_30506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (6))){
var inst_30459 = (state_30477[(7)]);
var inst_30464 = p.call(null,inst_30459);
var state_30477__$1 = state_30477;
if(cljs.core.truth_(inst_30464)){
var statearr_30484_30507 = state_30477__$1;
(statearr_30484_30507[(1)] = (8));

} else {
var statearr_30485_30508 = state_30477__$1;
(statearr_30485_30508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (3))){
var inst_30475 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30477__$1,inst_30475);
} else {
if((state_val_30478 === (2))){
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30477__$1,(4),ch);
} else {
if((state_val_30478 === (11))){
var inst_30467 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30486_30509 = state_30477__$1;
(statearr_30486_30509[(2)] = inst_30467);

(statearr_30486_30509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (9))){
var state_30477__$1 = state_30477;
var statearr_30487_30510 = state_30477__$1;
(statearr_30487_30510[(2)] = null);

(statearr_30487_30510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (5))){
var inst_30462 = cljs.core.async.close_BANG_.call(null,out);
var state_30477__$1 = state_30477;
var statearr_30488_30511 = state_30477__$1;
(statearr_30488_30511[(2)] = inst_30462);

(statearr_30488_30511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (10))){
var inst_30470 = (state_30477[(2)]);
var state_30477__$1 = (function (){var statearr_30489 = state_30477;
(statearr_30489[(8)] = inst_30470);

return statearr_30489;
})();
var statearr_30490_30512 = state_30477__$1;
(statearr_30490_30512[(2)] = null);

(statearr_30490_30512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (8))){
var inst_30459 = (state_30477[(7)]);
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30477__$1,(11),out,inst_30459);
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
});})(c__28200__auto___30502,out))
;
return ((function (switch__28088__auto__,c__28200__auto___30502,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_30494 = [null,null,null,null,null,null,null,null,null];
(statearr_30494[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_30494[(1)] = (1));

return statearr_30494;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_30477){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e30495){if((e30495 instanceof Object)){
var ex__28092__auto__ = e30495;
var statearr_30496_30513 = state_30477;
(statearr_30496_30513[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30514 = state_30477;
state_30477 = G__30514;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_30477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_30477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___30502,out))
})();
var state__28202__auto__ = (function (){var statearr_30497 = f__28201__auto__.call(null);
(statearr_30497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___30502);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___30502,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30515 = [];
var len__27054__auto___30518 = arguments.length;
var i__27055__auto___30519 = (0);
while(true){
if((i__27055__auto___30519 < len__27054__auto___30518)){
args30515.push((arguments[i__27055__auto___30519]));

var G__30520 = (i__27055__auto___30519 + (1));
i__27055__auto___30519 = G__30520;
continue;
} else {
}
break;
}

var G__30517 = args30515.length;
switch (G__30517) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30515.length)].join('')));

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
var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__){
return (function (state_30687){
var state_val_30688 = (state_30687[(1)]);
if((state_val_30688 === (7))){
var inst_30683 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30689_30730 = state_30687__$1;
(statearr_30689_30730[(2)] = inst_30683);

(statearr_30689_30730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (20))){
var inst_30653 = (state_30687[(7)]);
var inst_30664 = (state_30687[(2)]);
var inst_30665 = cljs.core.next.call(null,inst_30653);
var inst_30639 = inst_30665;
var inst_30640 = null;
var inst_30641 = (0);
var inst_30642 = (0);
var state_30687__$1 = (function (){var statearr_30690 = state_30687;
(statearr_30690[(8)] = inst_30639);

(statearr_30690[(9)] = inst_30640);

(statearr_30690[(10)] = inst_30664);

(statearr_30690[(11)] = inst_30642);

(statearr_30690[(12)] = inst_30641);

return statearr_30690;
})();
var statearr_30691_30731 = state_30687__$1;
(statearr_30691_30731[(2)] = null);

(statearr_30691_30731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (1))){
var state_30687__$1 = state_30687;
var statearr_30692_30732 = state_30687__$1;
(statearr_30692_30732[(2)] = null);

(statearr_30692_30732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (4))){
var inst_30628 = (state_30687[(13)]);
var inst_30628__$1 = (state_30687[(2)]);
var inst_30629 = (inst_30628__$1 == null);
var state_30687__$1 = (function (){var statearr_30693 = state_30687;
(statearr_30693[(13)] = inst_30628__$1);

return statearr_30693;
})();
if(cljs.core.truth_(inst_30629)){
var statearr_30694_30733 = state_30687__$1;
(statearr_30694_30733[(1)] = (5));

} else {
var statearr_30695_30734 = state_30687__$1;
(statearr_30695_30734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (15))){
var state_30687__$1 = state_30687;
var statearr_30699_30735 = state_30687__$1;
(statearr_30699_30735[(2)] = null);

(statearr_30699_30735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (21))){
var state_30687__$1 = state_30687;
var statearr_30700_30736 = state_30687__$1;
(statearr_30700_30736[(2)] = null);

(statearr_30700_30736[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (13))){
var inst_30639 = (state_30687[(8)]);
var inst_30640 = (state_30687[(9)]);
var inst_30642 = (state_30687[(11)]);
var inst_30641 = (state_30687[(12)]);
var inst_30649 = (state_30687[(2)]);
var inst_30650 = (inst_30642 + (1));
var tmp30696 = inst_30639;
var tmp30697 = inst_30640;
var tmp30698 = inst_30641;
var inst_30639__$1 = tmp30696;
var inst_30640__$1 = tmp30697;
var inst_30641__$1 = tmp30698;
var inst_30642__$1 = inst_30650;
var state_30687__$1 = (function (){var statearr_30701 = state_30687;
(statearr_30701[(8)] = inst_30639__$1);

(statearr_30701[(9)] = inst_30640__$1);

(statearr_30701[(11)] = inst_30642__$1);

(statearr_30701[(14)] = inst_30649);

(statearr_30701[(12)] = inst_30641__$1);

return statearr_30701;
})();
var statearr_30702_30737 = state_30687__$1;
(statearr_30702_30737[(2)] = null);

(statearr_30702_30737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (22))){
var state_30687__$1 = state_30687;
var statearr_30703_30738 = state_30687__$1;
(statearr_30703_30738[(2)] = null);

(statearr_30703_30738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (6))){
var inst_30628 = (state_30687[(13)]);
var inst_30637 = f.call(null,inst_30628);
var inst_30638 = cljs.core.seq.call(null,inst_30637);
var inst_30639 = inst_30638;
var inst_30640 = null;
var inst_30641 = (0);
var inst_30642 = (0);
var state_30687__$1 = (function (){var statearr_30704 = state_30687;
(statearr_30704[(8)] = inst_30639);

(statearr_30704[(9)] = inst_30640);

(statearr_30704[(11)] = inst_30642);

(statearr_30704[(12)] = inst_30641);

return statearr_30704;
})();
var statearr_30705_30739 = state_30687__$1;
(statearr_30705_30739[(2)] = null);

(statearr_30705_30739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (17))){
var inst_30653 = (state_30687[(7)]);
var inst_30657 = cljs.core.chunk_first.call(null,inst_30653);
var inst_30658 = cljs.core.chunk_rest.call(null,inst_30653);
var inst_30659 = cljs.core.count.call(null,inst_30657);
var inst_30639 = inst_30658;
var inst_30640 = inst_30657;
var inst_30641 = inst_30659;
var inst_30642 = (0);
var state_30687__$1 = (function (){var statearr_30706 = state_30687;
(statearr_30706[(8)] = inst_30639);

(statearr_30706[(9)] = inst_30640);

(statearr_30706[(11)] = inst_30642);

(statearr_30706[(12)] = inst_30641);

return statearr_30706;
})();
var statearr_30707_30740 = state_30687__$1;
(statearr_30707_30740[(2)] = null);

(statearr_30707_30740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (3))){
var inst_30685 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30687__$1,inst_30685);
} else {
if((state_val_30688 === (12))){
var inst_30673 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30708_30741 = state_30687__$1;
(statearr_30708_30741[(2)] = inst_30673);

(statearr_30708_30741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (2))){
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30687__$1,(4),in$);
} else {
if((state_val_30688 === (23))){
var inst_30681 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30709_30742 = state_30687__$1;
(statearr_30709_30742[(2)] = inst_30681);

(statearr_30709_30742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (19))){
var inst_30668 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30710_30743 = state_30687__$1;
(statearr_30710_30743[(2)] = inst_30668);

(statearr_30710_30743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (11))){
var inst_30653 = (state_30687[(7)]);
var inst_30639 = (state_30687[(8)]);
var inst_30653__$1 = cljs.core.seq.call(null,inst_30639);
var state_30687__$1 = (function (){var statearr_30711 = state_30687;
(statearr_30711[(7)] = inst_30653__$1);

return statearr_30711;
})();
if(inst_30653__$1){
var statearr_30712_30744 = state_30687__$1;
(statearr_30712_30744[(1)] = (14));

} else {
var statearr_30713_30745 = state_30687__$1;
(statearr_30713_30745[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (9))){
var inst_30675 = (state_30687[(2)]);
var inst_30676 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30687__$1 = (function (){var statearr_30714 = state_30687;
(statearr_30714[(15)] = inst_30675);

return statearr_30714;
})();
if(cljs.core.truth_(inst_30676)){
var statearr_30715_30746 = state_30687__$1;
(statearr_30715_30746[(1)] = (21));

} else {
var statearr_30716_30747 = state_30687__$1;
(statearr_30716_30747[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (5))){
var inst_30631 = cljs.core.async.close_BANG_.call(null,out);
var state_30687__$1 = state_30687;
var statearr_30717_30748 = state_30687__$1;
(statearr_30717_30748[(2)] = inst_30631);

(statearr_30717_30748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (14))){
var inst_30653 = (state_30687[(7)]);
var inst_30655 = cljs.core.chunked_seq_QMARK_.call(null,inst_30653);
var state_30687__$1 = state_30687;
if(inst_30655){
var statearr_30718_30749 = state_30687__$1;
(statearr_30718_30749[(1)] = (17));

} else {
var statearr_30719_30750 = state_30687__$1;
(statearr_30719_30750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (16))){
var inst_30671 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30720_30751 = state_30687__$1;
(statearr_30720_30751[(2)] = inst_30671);

(statearr_30720_30751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (10))){
var inst_30640 = (state_30687[(9)]);
var inst_30642 = (state_30687[(11)]);
var inst_30647 = cljs.core._nth.call(null,inst_30640,inst_30642);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30687__$1,(13),out,inst_30647);
} else {
if((state_val_30688 === (18))){
var inst_30653 = (state_30687[(7)]);
var inst_30662 = cljs.core.first.call(null,inst_30653);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30687__$1,(20),out,inst_30662);
} else {
if((state_val_30688 === (8))){
var inst_30642 = (state_30687[(11)]);
var inst_30641 = (state_30687[(12)]);
var inst_30644 = (inst_30642 < inst_30641);
var inst_30645 = inst_30644;
var state_30687__$1 = state_30687;
if(cljs.core.truth_(inst_30645)){
var statearr_30721_30752 = state_30687__$1;
(statearr_30721_30752[(1)] = (10));

} else {
var statearr_30722_30753 = state_30687__$1;
(statearr_30722_30753[(1)] = (11));

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
});})(c__28200__auto__))
;
return ((function (switch__28088__auto__,c__28200__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_30726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30726[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__);

(statearr_30726[(1)] = (1));

return statearr_30726;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____1 = (function (state_30687){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e30727){if((e30727 instanceof Object)){
var ex__28092__auto__ = e30727;
var statearr_30728_30754 = state_30687;
(statearr_30728_30754[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30755 = state_30687;
state_30687 = G__30755;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__ = function(state_30687){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____1.call(this,state_30687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__))
})();
var state__28202__auto__ = (function (){var statearr_30729 = f__28201__auto__.call(null);
(statearr_30729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_30729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__))
);

return c__28200__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30756 = [];
var len__27054__auto___30759 = arguments.length;
var i__27055__auto___30760 = (0);
while(true){
if((i__27055__auto___30760 < len__27054__auto___30759)){
args30756.push((arguments[i__27055__auto___30760]));

var G__30761 = (i__27055__auto___30760 + (1));
i__27055__auto___30760 = G__30761;
continue;
} else {
}
break;
}

var G__30758 = args30756.length;
switch (G__30758) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30756.length)].join('')));

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
var args30763 = [];
var len__27054__auto___30766 = arguments.length;
var i__27055__auto___30767 = (0);
while(true){
if((i__27055__auto___30767 < len__27054__auto___30766)){
args30763.push((arguments[i__27055__auto___30767]));

var G__30768 = (i__27055__auto___30767 + (1));
i__27055__auto___30767 = G__30768;
continue;
} else {
}
break;
}

var G__30765 = args30763.length;
switch (G__30765) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30763.length)].join('')));

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
var args30770 = [];
var len__27054__auto___30821 = arguments.length;
var i__27055__auto___30822 = (0);
while(true){
if((i__27055__auto___30822 < len__27054__auto___30821)){
args30770.push((arguments[i__27055__auto___30822]));

var G__30823 = (i__27055__auto___30822 + (1));
i__27055__auto___30822 = G__30823;
continue;
} else {
}
break;
}

var G__30772 = args30770.length;
switch (G__30772) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30770.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28200__auto___30825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___30825,out){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___30825,out){
return (function (state_30796){
var state_val_30797 = (state_30796[(1)]);
if((state_val_30797 === (7))){
var inst_30791 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
var statearr_30798_30826 = state_30796__$1;
(statearr_30798_30826[(2)] = inst_30791);

(statearr_30798_30826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (1))){
var inst_30773 = null;
var state_30796__$1 = (function (){var statearr_30799 = state_30796;
(statearr_30799[(7)] = inst_30773);

return statearr_30799;
})();
var statearr_30800_30827 = state_30796__$1;
(statearr_30800_30827[(2)] = null);

(statearr_30800_30827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (4))){
var inst_30776 = (state_30796[(8)]);
var inst_30776__$1 = (state_30796[(2)]);
var inst_30777 = (inst_30776__$1 == null);
var inst_30778 = cljs.core.not.call(null,inst_30777);
var state_30796__$1 = (function (){var statearr_30801 = state_30796;
(statearr_30801[(8)] = inst_30776__$1);

return statearr_30801;
})();
if(inst_30778){
var statearr_30802_30828 = state_30796__$1;
(statearr_30802_30828[(1)] = (5));

} else {
var statearr_30803_30829 = state_30796__$1;
(statearr_30803_30829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (6))){
var state_30796__$1 = state_30796;
var statearr_30804_30830 = state_30796__$1;
(statearr_30804_30830[(2)] = null);

(statearr_30804_30830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (3))){
var inst_30793 = (state_30796[(2)]);
var inst_30794 = cljs.core.async.close_BANG_.call(null,out);
var state_30796__$1 = (function (){var statearr_30805 = state_30796;
(statearr_30805[(9)] = inst_30793);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30796__$1,inst_30794);
} else {
if((state_val_30797 === (2))){
var state_30796__$1 = state_30796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30796__$1,(4),ch);
} else {
if((state_val_30797 === (11))){
var inst_30776 = (state_30796[(8)]);
var inst_30785 = (state_30796[(2)]);
var inst_30773 = inst_30776;
var state_30796__$1 = (function (){var statearr_30806 = state_30796;
(statearr_30806[(7)] = inst_30773);

(statearr_30806[(10)] = inst_30785);

return statearr_30806;
})();
var statearr_30807_30831 = state_30796__$1;
(statearr_30807_30831[(2)] = null);

(statearr_30807_30831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (9))){
var inst_30776 = (state_30796[(8)]);
var state_30796__$1 = state_30796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30796__$1,(11),out,inst_30776);
} else {
if((state_val_30797 === (5))){
var inst_30773 = (state_30796[(7)]);
var inst_30776 = (state_30796[(8)]);
var inst_30780 = cljs.core._EQ_.call(null,inst_30776,inst_30773);
var state_30796__$1 = state_30796;
if(inst_30780){
var statearr_30809_30832 = state_30796__$1;
(statearr_30809_30832[(1)] = (8));

} else {
var statearr_30810_30833 = state_30796__$1;
(statearr_30810_30833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (10))){
var inst_30788 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
var statearr_30811_30834 = state_30796__$1;
(statearr_30811_30834[(2)] = inst_30788);

(statearr_30811_30834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (8))){
var inst_30773 = (state_30796[(7)]);
var tmp30808 = inst_30773;
var inst_30773__$1 = tmp30808;
var state_30796__$1 = (function (){var statearr_30812 = state_30796;
(statearr_30812[(7)] = inst_30773__$1);

return statearr_30812;
})();
var statearr_30813_30835 = state_30796__$1;
(statearr_30813_30835[(2)] = null);

(statearr_30813_30835[(1)] = (2));


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
});})(c__28200__auto___30825,out))
;
return ((function (switch__28088__auto__,c__28200__auto___30825,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_30817 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30817[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_30817[(1)] = (1));

return statearr_30817;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_30796){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e30818){if((e30818 instanceof Object)){
var ex__28092__auto__ = e30818;
var statearr_30819_30836 = state_30796;
(statearr_30819_30836[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30837 = state_30796;
state_30796 = G__30837;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_30796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_30796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___30825,out))
})();
var state__28202__auto__ = (function (){var statearr_30820 = f__28201__auto__.call(null);
(statearr_30820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___30825);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___30825,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30838 = [];
var len__27054__auto___30908 = arguments.length;
var i__27055__auto___30909 = (0);
while(true){
if((i__27055__auto___30909 < len__27054__auto___30908)){
args30838.push((arguments[i__27055__auto___30909]));

var G__30910 = (i__27055__auto___30909 + (1));
i__27055__auto___30909 = G__30910;
continue;
} else {
}
break;
}

var G__30840 = args30838.length;
switch (G__30840) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30838.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28200__auto___30912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___30912,out){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___30912,out){
return (function (state_30878){
var state_val_30879 = (state_30878[(1)]);
if((state_val_30879 === (7))){
var inst_30874 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
var statearr_30880_30913 = state_30878__$1;
(statearr_30880_30913[(2)] = inst_30874);

(statearr_30880_30913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (1))){
var inst_30841 = (new Array(n));
var inst_30842 = inst_30841;
var inst_30843 = (0);
var state_30878__$1 = (function (){var statearr_30881 = state_30878;
(statearr_30881[(7)] = inst_30842);

(statearr_30881[(8)] = inst_30843);

return statearr_30881;
})();
var statearr_30882_30914 = state_30878__$1;
(statearr_30882_30914[(2)] = null);

(statearr_30882_30914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (4))){
var inst_30846 = (state_30878[(9)]);
var inst_30846__$1 = (state_30878[(2)]);
var inst_30847 = (inst_30846__$1 == null);
var inst_30848 = cljs.core.not.call(null,inst_30847);
var state_30878__$1 = (function (){var statearr_30883 = state_30878;
(statearr_30883[(9)] = inst_30846__$1);

return statearr_30883;
})();
if(inst_30848){
var statearr_30884_30915 = state_30878__$1;
(statearr_30884_30915[(1)] = (5));

} else {
var statearr_30885_30916 = state_30878__$1;
(statearr_30885_30916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (15))){
var inst_30868 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
var statearr_30886_30917 = state_30878__$1;
(statearr_30886_30917[(2)] = inst_30868);

(statearr_30886_30917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (13))){
var state_30878__$1 = state_30878;
var statearr_30887_30918 = state_30878__$1;
(statearr_30887_30918[(2)] = null);

(statearr_30887_30918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (6))){
var inst_30843 = (state_30878[(8)]);
var inst_30864 = (inst_30843 > (0));
var state_30878__$1 = state_30878;
if(cljs.core.truth_(inst_30864)){
var statearr_30888_30919 = state_30878__$1;
(statearr_30888_30919[(1)] = (12));

} else {
var statearr_30889_30920 = state_30878__$1;
(statearr_30889_30920[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (3))){
var inst_30876 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30878__$1,inst_30876);
} else {
if((state_val_30879 === (12))){
var inst_30842 = (state_30878[(7)]);
var inst_30866 = cljs.core.vec.call(null,inst_30842);
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30878__$1,(15),out,inst_30866);
} else {
if((state_val_30879 === (2))){
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30878__$1,(4),ch);
} else {
if((state_val_30879 === (11))){
var inst_30858 = (state_30878[(2)]);
var inst_30859 = (new Array(n));
var inst_30842 = inst_30859;
var inst_30843 = (0);
var state_30878__$1 = (function (){var statearr_30890 = state_30878;
(statearr_30890[(7)] = inst_30842);

(statearr_30890[(10)] = inst_30858);

(statearr_30890[(8)] = inst_30843);

return statearr_30890;
})();
var statearr_30891_30921 = state_30878__$1;
(statearr_30891_30921[(2)] = null);

(statearr_30891_30921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (9))){
var inst_30842 = (state_30878[(7)]);
var inst_30856 = cljs.core.vec.call(null,inst_30842);
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30878__$1,(11),out,inst_30856);
} else {
if((state_val_30879 === (5))){
var inst_30842 = (state_30878[(7)]);
var inst_30846 = (state_30878[(9)]);
var inst_30851 = (state_30878[(11)]);
var inst_30843 = (state_30878[(8)]);
var inst_30850 = (inst_30842[inst_30843] = inst_30846);
var inst_30851__$1 = (inst_30843 + (1));
var inst_30852 = (inst_30851__$1 < n);
var state_30878__$1 = (function (){var statearr_30892 = state_30878;
(statearr_30892[(12)] = inst_30850);

(statearr_30892[(11)] = inst_30851__$1);

return statearr_30892;
})();
if(cljs.core.truth_(inst_30852)){
var statearr_30893_30922 = state_30878__$1;
(statearr_30893_30922[(1)] = (8));

} else {
var statearr_30894_30923 = state_30878__$1;
(statearr_30894_30923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (14))){
var inst_30871 = (state_30878[(2)]);
var inst_30872 = cljs.core.async.close_BANG_.call(null,out);
var state_30878__$1 = (function (){var statearr_30896 = state_30878;
(statearr_30896[(13)] = inst_30871);

return statearr_30896;
})();
var statearr_30897_30924 = state_30878__$1;
(statearr_30897_30924[(2)] = inst_30872);

(statearr_30897_30924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (10))){
var inst_30862 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
var statearr_30898_30925 = state_30878__$1;
(statearr_30898_30925[(2)] = inst_30862);

(statearr_30898_30925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (8))){
var inst_30842 = (state_30878[(7)]);
var inst_30851 = (state_30878[(11)]);
var tmp30895 = inst_30842;
var inst_30842__$1 = tmp30895;
var inst_30843 = inst_30851;
var state_30878__$1 = (function (){var statearr_30899 = state_30878;
(statearr_30899[(7)] = inst_30842__$1);

(statearr_30899[(8)] = inst_30843);

return statearr_30899;
})();
var statearr_30900_30926 = state_30878__$1;
(statearr_30900_30926[(2)] = null);

(statearr_30900_30926[(1)] = (2));


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
});})(c__28200__auto___30912,out))
;
return ((function (switch__28088__auto__,c__28200__auto___30912,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_30904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30904[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_30904[(1)] = (1));

return statearr_30904;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_30878){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e30905){if((e30905 instanceof Object)){
var ex__28092__auto__ = e30905;
var statearr_30906_30927 = state_30878;
(statearr_30906_30927[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30928 = state_30878;
state_30878 = G__30928;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_30878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_30878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___30912,out))
})();
var state__28202__auto__ = (function (){var statearr_30907 = f__28201__auto__.call(null);
(statearr_30907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___30912);

return statearr_30907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___30912,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30929 = [];
var len__27054__auto___31003 = arguments.length;
var i__27055__auto___31004 = (0);
while(true){
if((i__27055__auto___31004 < len__27054__auto___31003)){
args30929.push((arguments[i__27055__auto___31004]));

var G__31005 = (i__27055__auto___31004 + (1));
i__27055__auto___31004 = G__31005;
continue;
} else {
}
break;
}

var G__30931 = args30929.length;
switch (G__30931) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30929.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28200__auto___31007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___31007,out){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___31007,out){
return (function (state_30973){
var state_val_30974 = (state_30973[(1)]);
if((state_val_30974 === (7))){
var inst_30969 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_30975_31008 = state_30973__$1;
(statearr_30975_31008[(2)] = inst_30969);

(statearr_30975_31008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (1))){
var inst_30932 = [];
var inst_30933 = inst_30932;
var inst_30934 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30973__$1 = (function (){var statearr_30976 = state_30973;
(statearr_30976[(7)] = inst_30934);

(statearr_30976[(8)] = inst_30933);

return statearr_30976;
})();
var statearr_30977_31009 = state_30973__$1;
(statearr_30977_31009[(2)] = null);

(statearr_30977_31009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (4))){
var inst_30937 = (state_30973[(9)]);
var inst_30937__$1 = (state_30973[(2)]);
var inst_30938 = (inst_30937__$1 == null);
var inst_30939 = cljs.core.not.call(null,inst_30938);
var state_30973__$1 = (function (){var statearr_30978 = state_30973;
(statearr_30978[(9)] = inst_30937__$1);

return statearr_30978;
})();
if(inst_30939){
var statearr_30979_31010 = state_30973__$1;
(statearr_30979_31010[(1)] = (5));

} else {
var statearr_30980_31011 = state_30973__$1;
(statearr_30980_31011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (15))){
var inst_30963 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_30981_31012 = state_30973__$1;
(statearr_30981_31012[(2)] = inst_30963);

(statearr_30981_31012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (13))){
var state_30973__$1 = state_30973;
var statearr_30982_31013 = state_30973__$1;
(statearr_30982_31013[(2)] = null);

(statearr_30982_31013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (6))){
var inst_30933 = (state_30973[(8)]);
var inst_30958 = inst_30933.length;
var inst_30959 = (inst_30958 > (0));
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30959)){
var statearr_30983_31014 = state_30973__$1;
(statearr_30983_31014[(1)] = (12));

} else {
var statearr_30984_31015 = state_30973__$1;
(statearr_30984_31015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (3))){
var inst_30971 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30973__$1,inst_30971);
} else {
if((state_val_30974 === (12))){
var inst_30933 = (state_30973[(8)]);
var inst_30961 = cljs.core.vec.call(null,inst_30933);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30973__$1,(15),out,inst_30961);
} else {
if((state_val_30974 === (2))){
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30973__$1,(4),ch);
} else {
if((state_val_30974 === (11))){
var inst_30937 = (state_30973[(9)]);
var inst_30941 = (state_30973[(10)]);
var inst_30951 = (state_30973[(2)]);
var inst_30952 = [];
var inst_30953 = inst_30952.push(inst_30937);
var inst_30933 = inst_30952;
var inst_30934 = inst_30941;
var state_30973__$1 = (function (){var statearr_30985 = state_30973;
(statearr_30985[(7)] = inst_30934);

(statearr_30985[(8)] = inst_30933);

(statearr_30985[(11)] = inst_30951);

(statearr_30985[(12)] = inst_30953);

return statearr_30985;
})();
var statearr_30986_31016 = state_30973__$1;
(statearr_30986_31016[(2)] = null);

(statearr_30986_31016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (9))){
var inst_30933 = (state_30973[(8)]);
var inst_30949 = cljs.core.vec.call(null,inst_30933);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30973__$1,(11),out,inst_30949);
} else {
if((state_val_30974 === (5))){
var inst_30937 = (state_30973[(9)]);
var inst_30934 = (state_30973[(7)]);
var inst_30941 = (state_30973[(10)]);
var inst_30941__$1 = f.call(null,inst_30937);
var inst_30942 = cljs.core._EQ_.call(null,inst_30941__$1,inst_30934);
var inst_30943 = cljs.core.keyword_identical_QMARK_.call(null,inst_30934,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30944 = (inst_30942) || (inst_30943);
var state_30973__$1 = (function (){var statearr_30987 = state_30973;
(statearr_30987[(10)] = inst_30941__$1);

return statearr_30987;
})();
if(cljs.core.truth_(inst_30944)){
var statearr_30988_31017 = state_30973__$1;
(statearr_30988_31017[(1)] = (8));

} else {
var statearr_30989_31018 = state_30973__$1;
(statearr_30989_31018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (14))){
var inst_30966 = (state_30973[(2)]);
var inst_30967 = cljs.core.async.close_BANG_.call(null,out);
var state_30973__$1 = (function (){var statearr_30991 = state_30973;
(statearr_30991[(13)] = inst_30966);

return statearr_30991;
})();
var statearr_30992_31019 = state_30973__$1;
(statearr_30992_31019[(2)] = inst_30967);

(statearr_30992_31019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (10))){
var inst_30956 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_30993_31020 = state_30973__$1;
(statearr_30993_31020[(2)] = inst_30956);

(statearr_30993_31020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (8))){
var inst_30937 = (state_30973[(9)]);
var inst_30933 = (state_30973[(8)]);
var inst_30941 = (state_30973[(10)]);
var inst_30946 = inst_30933.push(inst_30937);
var tmp30990 = inst_30933;
var inst_30933__$1 = tmp30990;
var inst_30934 = inst_30941;
var state_30973__$1 = (function (){var statearr_30994 = state_30973;
(statearr_30994[(7)] = inst_30934);

(statearr_30994[(8)] = inst_30933__$1);

(statearr_30994[(14)] = inst_30946);

return statearr_30994;
})();
var statearr_30995_31021 = state_30973__$1;
(statearr_30995_31021[(2)] = null);

(statearr_30995_31021[(1)] = (2));


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
});})(c__28200__auto___31007,out))
;
return ((function (switch__28088__auto__,c__28200__auto___31007,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_30999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30999[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_30999[(1)] = (1));

return statearr_30999;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_30973){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_30973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e31000){if((e31000 instanceof Object)){
var ex__28092__auto__ = e31000;
var statearr_31001_31022 = state_30973;
(statearr_31001_31022[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31023 = state_30973;
state_30973 = G__31023;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_30973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_30973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___31007,out))
})();
var state__28202__auto__ = (function (){var statearr_31002 = f__28201__auto__.call(null);
(statearr_31002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___31007);

return statearr_31002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___31007,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1498622385946