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
var args61147 = [];
var len__27054__auto___61153 = arguments.length;
var i__27055__auto___61154 = (0);
while(true){
if((i__27055__auto___61154 < len__27054__auto___61153)){
args61147.push((arguments[i__27055__auto___61154]));

var G__61155 = (i__27055__auto___61154 + (1));
i__27055__auto___61154 = G__61155;
continue;
} else {
}
break;
}

var G__61149 = args61147.length;
switch (G__61149) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61147.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async61150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61150 = (function (f,blockable,meta61151){
this.f = f;
this.blockable = blockable;
this.meta61151 = meta61151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61152,meta61151__$1){
var self__ = this;
var _61152__$1 = this;
return (new cljs.core.async.t_cljs$core$async61150(self__.f,self__.blockable,meta61151__$1));
});

cljs.core.async.t_cljs$core$async61150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61152){
var self__ = this;
var _61152__$1 = this;
return self__.meta61151;
});

cljs.core.async.t_cljs$core$async61150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async61150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async61150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async61150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61151","meta61151",961590092,null)], null);
});

cljs.core.async.t_cljs$core$async61150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61150";

cljs.core.async.t_cljs$core$async61150.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async61150");
});

cljs.core.async.__GT_t_cljs$core$async61150 = (function cljs$core$async$__GT_t_cljs$core$async61150(f__$1,blockable__$1,meta61151){
return (new cljs.core.async.t_cljs$core$async61150(f__$1,blockable__$1,meta61151));
});

}

return (new cljs.core.async.t_cljs$core$async61150(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args61159 = [];
var len__27054__auto___61162 = arguments.length;
var i__27055__auto___61163 = (0);
while(true){
if((i__27055__auto___61163 < len__27054__auto___61162)){
args61159.push((arguments[i__27055__auto___61163]));

var G__61164 = (i__27055__auto___61163 + (1));
i__27055__auto___61163 = G__61164;
continue;
} else {
}
break;
}

var G__61161 = args61159.length;
switch (G__61161) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61159.length)].join('')));

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
var args61166 = [];
var len__27054__auto___61169 = arguments.length;
var i__27055__auto___61170 = (0);
while(true){
if((i__27055__auto___61170 < len__27054__auto___61169)){
args61166.push((arguments[i__27055__auto___61170]));

var G__61171 = (i__27055__auto___61170 + (1));
i__27055__auto___61170 = G__61171;
continue;
} else {
}
break;
}

var G__61168 = args61166.length;
switch (G__61168) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61166.length)].join('')));

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
var args61173 = [];
var len__27054__auto___61176 = arguments.length;
var i__27055__auto___61177 = (0);
while(true){
if((i__27055__auto___61177 < len__27054__auto___61176)){
args61173.push((arguments[i__27055__auto___61177]));

var G__61178 = (i__27055__auto___61177 + (1));
i__27055__auto___61177 = G__61178;
continue;
} else {
}
break;
}

var G__61175 = args61173.length;
switch (G__61175) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61173.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_61180 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_61180);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_61180,ret){
return (function (){
return fn1.call(null,val_61180);
});})(val_61180,ret))
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
var args61181 = [];
var len__27054__auto___61184 = arguments.length;
var i__27055__auto___61185 = (0);
while(true){
if((i__27055__auto___61185 < len__27054__auto___61184)){
args61181.push((arguments[i__27055__auto___61185]));

var G__61186 = (i__27055__auto___61185 + (1));
i__27055__auto___61185 = G__61186;
continue;
} else {
}
break;
}

var G__61183 = args61181.length;
switch (G__61183) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61181.length)].join('')));

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
var n__26894__auto___61188 = n;
var x_61189 = (0);
while(true){
if((x_61189 < n__26894__auto___61188)){
(a[x_61189] = (0));

var G__61190 = (x_61189 + (1));
x_61189 = G__61190;
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

var G__61191 = (i + (1));
i = G__61191;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async61195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61195 = (function (alt_flag,flag,meta61196){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta61196 = meta61196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_61197,meta61196__$1){
var self__ = this;
var _61197__$1 = this;
return (new cljs.core.async.t_cljs$core$async61195(self__.alt_flag,self__.flag,meta61196__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async61195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_61197){
var self__ = this;
var _61197__$1 = this;
return self__.meta61196;
});})(flag))
;

cljs.core.async.t_cljs$core$async61195.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async61195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async61195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61195.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61196","meta61196",-763441332,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async61195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61195";

cljs.core.async.t_cljs$core$async61195.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async61195");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async61195 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61195(alt_flag__$1,flag__$1,meta61196){
return (new cljs.core.async.t_cljs$core$async61195(alt_flag__$1,flag__$1,meta61196));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async61195(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async61201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61201 = (function (alt_handler,flag,cb,meta61202){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta61202 = meta61202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61203,meta61202__$1){
var self__ = this;
var _61203__$1 = this;
return (new cljs.core.async.t_cljs$core$async61201(self__.alt_handler,self__.flag,self__.cb,meta61202__$1));
});

cljs.core.async.t_cljs$core$async61201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61203){
var self__ = this;
var _61203__$1 = this;
return self__.meta61202;
});

cljs.core.async.t_cljs$core$async61201.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async61201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async61201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async61201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61202","meta61202",1581396425,null)], null);
});

cljs.core.async.t_cljs$core$async61201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61201";

cljs.core.async.t_cljs$core$async61201.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async61201");
});

cljs.core.async.__GT_t_cljs$core$async61201 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61201(alt_handler__$1,flag__$1,cb__$1,meta61202){
return (new cljs.core.async.t_cljs$core$async61201(alt_handler__$1,flag__$1,cb__$1,meta61202));
});

}

return (new cljs.core.async.t_cljs$core$async61201(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__61204_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61204_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61205_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61205_SHARP_,port], null));
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
var G__61206 = (i + (1));
i = G__61206;
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
var len__27054__auto___61212 = arguments.length;
var i__27055__auto___61213 = (0);
while(true){
if((i__27055__auto___61213 < len__27054__auto___61212)){
args__27061__auto__.push((arguments[i__27055__auto___61213]));

var G__61214 = (i__27055__auto___61213 + (1));
i__27055__auto___61213 = G__61214;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61209){
var map__61210 = p__61209;
var map__61210__$1 = ((((!((map__61210 == null)))?((((map__61210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61210):map__61210);
var opts = map__61210__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61207){
var G__61208 = cljs.core.first.call(null,seq61207);
var seq61207__$1 = cljs.core.next.call(null,seq61207);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61208,seq61207__$1);
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
var args61215 = [];
var len__27054__auto___61265 = arguments.length;
var i__27055__auto___61266 = (0);
while(true){
if((i__27055__auto___61266 < len__27054__auto___61265)){
args61215.push((arguments[i__27055__auto___61266]));

var G__61267 = (i__27055__auto___61266 + (1));
i__27055__auto___61266 = G__61267;
continue;
} else {
}
break;
}

var G__61217 = args61215.length;
switch (G__61217) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61215.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28201__auto___61269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___61269){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___61269){
return (function (state_61241){
var state_val_61242 = (state_61241[(1)]);
if((state_val_61242 === (7))){
var inst_61237 = (state_61241[(2)]);
var state_61241__$1 = state_61241;
var statearr_61243_61270 = state_61241__$1;
(statearr_61243_61270[(2)] = inst_61237);

(statearr_61243_61270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (1))){
var state_61241__$1 = state_61241;
var statearr_61244_61271 = state_61241__$1;
(statearr_61244_61271[(2)] = null);

(statearr_61244_61271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (4))){
var inst_61220 = (state_61241[(7)]);
var inst_61220__$1 = (state_61241[(2)]);
var inst_61221 = (inst_61220__$1 == null);
var state_61241__$1 = (function (){var statearr_61245 = state_61241;
(statearr_61245[(7)] = inst_61220__$1);

return statearr_61245;
})();
if(cljs.core.truth_(inst_61221)){
var statearr_61246_61272 = state_61241__$1;
(statearr_61246_61272[(1)] = (5));

} else {
var statearr_61247_61273 = state_61241__$1;
(statearr_61247_61273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (13))){
var state_61241__$1 = state_61241;
var statearr_61248_61274 = state_61241__$1;
(statearr_61248_61274[(2)] = null);

(statearr_61248_61274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (6))){
var inst_61220 = (state_61241[(7)]);
var state_61241__$1 = state_61241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61241__$1,(11),to,inst_61220);
} else {
if((state_val_61242 === (3))){
var inst_61239 = (state_61241[(2)]);
var state_61241__$1 = state_61241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61241__$1,inst_61239);
} else {
if((state_val_61242 === (12))){
var state_61241__$1 = state_61241;
var statearr_61249_61275 = state_61241__$1;
(statearr_61249_61275[(2)] = null);

(statearr_61249_61275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (2))){
var state_61241__$1 = state_61241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61241__$1,(4),from);
} else {
if((state_val_61242 === (11))){
var inst_61230 = (state_61241[(2)]);
var state_61241__$1 = state_61241;
if(cljs.core.truth_(inst_61230)){
var statearr_61250_61276 = state_61241__$1;
(statearr_61250_61276[(1)] = (12));

} else {
var statearr_61251_61277 = state_61241__$1;
(statearr_61251_61277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (9))){
var state_61241__$1 = state_61241;
var statearr_61252_61278 = state_61241__$1;
(statearr_61252_61278[(2)] = null);

(statearr_61252_61278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (5))){
var state_61241__$1 = state_61241;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61253_61279 = state_61241__$1;
(statearr_61253_61279[(1)] = (8));

} else {
var statearr_61254_61280 = state_61241__$1;
(statearr_61254_61280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (14))){
var inst_61235 = (state_61241[(2)]);
var state_61241__$1 = state_61241;
var statearr_61255_61281 = state_61241__$1;
(statearr_61255_61281[(2)] = inst_61235);

(statearr_61255_61281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (10))){
var inst_61227 = (state_61241[(2)]);
var state_61241__$1 = state_61241;
var statearr_61256_61282 = state_61241__$1;
(statearr_61256_61282[(2)] = inst_61227);

(statearr_61256_61282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61242 === (8))){
var inst_61224 = cljs.core.async.close_BANG_.call(null,to);
var state_61241__$1 = state_61241;
var statearr_61257_61283 = state_61241__$1;
(statearr_61257_61283[(2)] = inst_61224);

(statearr_61257_61283[(1)] = (10));


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
});})(c__28201__auto___61269))
;
return ((function (switch__28088__auto__,c__28201__auto___61269){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_61261 = [null,null,null,null,null,null,null,null];
(statearr_61261[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_61261[(1)] = (1));

return statearr_61261;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_61241){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61262){if((e61262 instanceof Object)){
var ex__28092__auto__ = e61262;
var statearr_61263_61284 = state_61241;
(statearr_61263_61284[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61285 = state_61241;
state_61241 = G__61285;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_61241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_61241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___61269))
})();
var state__28203__auto__ = (function (){var statearr_61264 = f__28202__auto__.call(null);
(statearr_61264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___61269);

return statearr_61264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___61269))
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
return (function (p__61473){
var vec__61474 = p__61473;
var v = cljs.core.nth.call(null,vec__61474,(0),null);
var p = cljs.core.nth.call(null,vec__61474,(1),null);
var job = vec__61474;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28201__auto___61660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___61660,res,vec__61474,v,p,job,jobs,results){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___61660,res,vec__61474,v,p,job,jobs,results){
return (function (state_61481){
var state_val_61482 = (state_61481[(1)]);
if((state_val_61482 === (1))){
var state_61481__$1 = state_61481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61481__$1,(2),res,v);
} else {
if((state_val_61482 === (2))){
var inst_61478 = (state_61481[(2)]);
var inst_61479 = cljs.core.async.close_BANG_.call(null,res);
var state_61481__$1 = (function (){var statearr_61483 = state_61481;
(statearr_61483[(7)] = inst_61478);

return statearr_61483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61481__$1,inst_61479);
} else {
return null;
}
}
});})(c__28201__auto___61660,res,vec__61474,v,p,job,jobs,results))
;
return ((function (switch__28088__auto__,c__28201__auto___61660,res,vec__61474,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_61487 = [null,null,null,null,null,null,null,null];
(statearr_61487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_61487[(1)] = (1));

return statearr_61487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_61481){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61488){if((e61488 instanceof Object)){
var ex__28092__auto__ = e61488;
var statearr_61489_61661 = state_61481;
(statearr_61489_61661[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61662 = state_61481;
state_61481 = G__61662;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_61481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_61481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___61660,res,vec__61474,v,p,job,jobs,results))
})();
var state__28203__auto__ = (function (){var statearr_61490 = f__28202__auto__.call(null);
(statearr_61490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___61660);

return statearr_61490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___61660,res,vec__61474,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__61491){
var vec__61492 = p__61491;
var v = cljs.core.nth.call(null,vec__61492,(0),null);
var p = cljs.core.nth.call(null,vec__61492,(1),null);
var job = vec__61492;
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
var n__26894__auto___61663 = n;
var __61664 = (0);
while(true){
if((__61664 < n__26894__auto___61663)){
var G__61495_61665 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__61495_61665) {
case "compute":
var c__28201__auto___61667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__61664,c__28201__auto___61667,G__61495_61665,n__26894__auto___61663,jobs,results,process,async){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (__61664,c__28201__auto___61667,G__61495_61665,n__26894__auto___61663,jobs,results,process,async){
return (function (state_61508){
var state_val_61509 = (state_61508[(1)]);
if((state_val_61509 === (1))){
var state_61508__$1 = state_61508;
var statearr_61510_61668 = state_61508__$1;
(statearr_61510_61668[(2)] = null);

(statearr_61510_61668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61509 === (2))){
var state_61508__$1 = state_61508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61508__$1,(4),jobs);
} else {
if((state_val_61509 === (3))){
var inst_61506 = (state_61508[(2)]);
var state_61508__$1 = state_61508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61508__$1,inst_61506);
} else {
if((state_val_61509 === (4))){
var inst_61498 = (state_61508[(2)]);
var inst_61499 = process.call(null,inst_61498);
var state_61508__$1 = state_61508;
if(cljs.core.truth_(inst_61499)){
var statearr_61511_61669 = state_61508__$1;
(statearr_61511_61669[(1)] = (5));

} else {
var statearr_61512_61670 = state_61508__$1;
(statearr_61512_61670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61509 === (5))){
var state_61508__$1 = state_61508;
var statearr_61513_61671 = state_61508__$1;
(statearr_61513_61671[(2)] = null);

(statearr_61513_61671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61509 === (6))){
var state_61508__$1 = state_61508;
var statearr_61514_61672 = state_61508__$1;
(statearr_61514_61672[(2)] = null);

(statearr_61514_61672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61509 === (7))){
var inst_61504 = (state_61508[(2)]);
var state_61508__$1 = state_61508;
var statearr_61515_61673 = state_61508__$1;
(statearr_61515_61673[(2)] = inst_61504);

(statearr_61515_61673[(1)] = (3));


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
});})(__61664,c__28201__auto___61667,G__61495_61665,n__26894__auto___61663,jobs,results,process,async))
;
return ((function (__61664,switch__28088__auto__,c__28201__auto___61667,G__61495_61665,n__26894__auto___61663,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_61519 = [null,null,null,null,null,null,null];
(statearr_61519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_61519[(1)] = (1));

return statearr_61519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_61508){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61520){if((e61520 instanceof Object)){
var ex__28092__auto__ = e61520;
var statearr_61521_61674 = state_61508;
(statearr_61521_61674[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61675 = state_61508;
state_61508 = G__61675;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_61508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_61508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(__61664,switch__28088__auto__,c__28201__auto___61667,G__61495_61665,n__26894__auto___61663,jobs,results,process,async))
})();
var state__28203__auto__ = (function (){var statearr_61522 = f__28202__auto__.call(null);
(statearr_61522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___61667);

return statearr_61522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(__61664,c__28201__auto___61667,G__61495_61665,n__26894__auto___61663,jobs,results,process,async))
);


break;
case "async":
var c__28201__auto___61676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__61664,c__28201__auto___61676,G__61495_61665,n__26894__auto___61663,jobs,results,process,async){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (__61664,c__28201__auto___61676,G__61495_61665,n__26894__auto___61663,jobs,results,process,async){
return (function (state_61535){
var state_val_61536 = (state_61535[(1)]);
if((state_val_61536 === (1))){
var state_61535__$1 = state_61535;
var statearr_61537_61677 = state_61535__$1;
(statearr_61537_61677[(2)] = null);

(statearr_61537_61677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61536 === (2))){
var state_61535__$1 = state_61535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61535__$1,(4),jobs);
} else {
if((state_val_61536 === (3))){
var inst_61533 = (state_61535[(2)]);
var state_61535__$1 = state_61535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61535__$1,inst_61533);
} else {
if((state_val_61536 === (4))){
var inst_61525 = (state_61535[(2)]);
var inst_61526 = async.call(null,inst_61525);
var state_61535__$1 = state_61535;
if(cljs.core.truth_(inst_61526)){
var statearr_61538_61678 = state_61535__$1;
(statearr_61538_61678[(1)] = (5));

} else {
var statearr_61539_61679 = state_61535__$1;
(statearr_61539_61679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61536 === (5))){
var state_61535__$1 = state_61535;
var statearr_61540_61680 = state_61535__$1;
(statearr_61540_61680[(2)] = null);

(statearr_61540_61680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61536 === (6))){
var state_61535__$1 = state_61535;
var statearr_61541_61681 = state_61535__$1;
(statearr_61541_61681[(2)] = null);

(statearr_61541_61681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61536 === (7))){
var inst_61531 = (state_61535[(2)]);
var state_61535__$1 = state_61535;
var statearr_61542_61682 = state_61535__$1;
(statearr_61542_61682[(2)] = inst_61531);

(statearr_61542_61682[(1)] = (3));


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
});})(__61664,c__28201__auto___61676,G__61495_61665,n__26894__auto___61663,jobs,results,process,async))
;
return ((function (__61664,switch__28088__auto__,c__28201__auto___61676,G__61495_61665,n__26894__auto___61663,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_61546 = [null,null,null,null,null,null,null];
(statearr_61546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_61546[(1)] = (1));

return statearr_61546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_61535){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61547){if((e61547 instanceof Object)){
var ex__28092__auto__ = e61547;
var statearr_61548_61683 = state_61535;
(statearr_61548_61683[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61684 = state_61535;
state_61535 = G__61684;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_61535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_61535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(__61664,switch__28088__auto__,c__28201__auto___61676,G__61495_61665,n__26894__auto___61663,jobs,results,process,async))
})();
var state__28203__auto__ = (function (){var statearr_61549 = f__28202__auto__.call(null);
(statearr_61549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___61676);

return statearr_61549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(__61664,c__28201__auto___61676,G__61495_61665,n__26894__auto___61663,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__61685 = (__61664 + (1));
__61664 = G__61685;
continue;
} else {
}
break;
}

var c__28201__auto___61686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___61686,jobs,results,process,async){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___61686,jobs,results,process,async){
return (function (state_61571){
var state_val_61572 = (state_61571[(1)]);
if((state_val_61572 === (1))){
var state_61571__$1 = state_61571;
var statearr_61573_61687 = state_61571__$1;
(statearr_61573_61687[(2)] = null);

(statearr_61573_61687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61572 === (2))){
var state_61571__$1 = state_61571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61571__$1,(4),from);
} else {
if((state_val_61572 === (3))){
var inst_61569 = (state_61571[(2)]);
var state_61571__$1 = state_61571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61571__$1,inst_61569);
} else {
if((state_val_61572 === (4))){
var inst_61552 = (state_61571[(7)]);
var inst_61552__$1 = (state_61571[(2)]);
var inst_61553 = (inst_61552__$1 == null);
var state_61571__$1 = (function (){var statearr_61574 = state_61571;
(statearr_61574[(7)] = inst_61552__$1);

return statearr_61574;
})();
if(cljs.core.truth_(inst_61553)){
var statearr_61575_61688 = state_61571__$1;
(statearr_61575_61688[(1)] = (5));

} else {
var statearr_61576_61689 = state_61571__$1;
(statearr_61576_61689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61572 === (5))){
var inst_61555 = cljs.core.async.close_BANG_.call(null,jobs);
var state_61571__$1 = state_61571;
var statearr_61577_61690 = state_61571__$1;
(statearr_61577_61690[(2)] = inst_61555);

(statearr_61577_61690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61572 === (6))){
var inst_61557 = (state_61571[(8)]);
var inst_61552 = (state_61571[(7)]);
var inst_61557__$1 = cljs.core.async.chan.call(null,(1));
var inst_61558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61559 = [inst_61552,inst_61557__$1];
var inst_61560 = (new cljs.core.PersistentVector(null,2,(5),inst_61558,inst_61559,null));
var state_61571__$1 = (function (){var statearr_61578 = state_61571;
(statearr_61578[(8)] = inst_61557__$1);

return statearr_61578;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61571__$1,(8),jobs,inst_61560);
} else {
if((state_val_61572 === (7))){
var inst_61567 = (state_61571[(2)]);
var state_61571__$1 = state_61571;
var statearr_61579_61691 = state_61571__$1;
(statearr_61579_61691[(2)] = inst_61567);

(statearr_61579_61691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61572 === (8))){
var inst_61557 = (state_61571[(8)]);
var inst_61562 = (state_61571[(2)]);
var state_61571__$1 = (function (){var statearr_61580 = state_61571;
(statearr_61580[(9)] = inst_61562);

return statearr_61580;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61571__$1,(9),results,inst_61557);
} else {
if((state_val_61572 === (9))){
var inst_61564 = (state_61571[(2)]);
var state_61571__$1 = (function (){var statearr_61581 = state_61571;
(statearr_61581[(10)] = inst_61564);

return statearr_61581;
})();
var statearr_61582_61692 = state_61571__$1;
(statearr_61582_61692[(2)] = null);

(statearr_61582_61692[(1)] = (2));


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
});})(c__28201__auto___61686,jobs,results,process,async))
;
return ((function (switch__28088__auto__,c__28201__auto___61686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_61586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_61586[(1)] = (1));

return statearr_61586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_61571){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61587){if((e61587 instanceof Object)){
var ex__28092__auto__ = e61587;
var statearr_61588_61693 = state_61571;
(statearr_61588_61693[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61694 = state_61571;
state_61571 = G__61694;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_61571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_61571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___61686,jobs,results,process,async))
})();
var state__28203__auto__ = (function (){var statearr_61589 = f__28202__auto__.call(null);
(statearr_61589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___61686);

return statearr_61589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___61686,jobs,results,process,async))
);


var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__,jobs,results,process,async){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__,jobs,results,process,async){
return (function (state_61627){
var state_val_61628 = (state_61627[(1)]);
if((state_val_61628 === (7))){
var inst_61623 = (state_61627[(2)]);
var state_61627__$1 = state_61627;
var statearr_61629_61695 = state_61627__$1;
(statearr_61629_61695[(2)] = inst_61623);

(statearr_61629_61695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (20))){
var state_61627__$1 = state_61627;
var statearr_61630_61696 = state_61627__$1;
(statearr_61630_61696[(2)] = null);

(statearr_61630_61696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (1))){
var state_61627__$1 = state_61627;
var statearr_61631_61697 = state_61627__$1;
(statearr_61631_61697[(2)] = null);

(statearr_61631_61697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (4))){
var inst_61592 = (state_61627[(7)]);
var inst_61592__$1 = (state_61627[(2)]);
var inst_61593 = (inst_61592__$1 == null);
var state_61627__$1 = (function (){var statearr_61632 = state_61627;
(statearr_61632[(7)] = inst_61592__$1);

return statearr_61632;
})();
if(cljs.core.truth_(inst_61593)){
var statearr_61633_61698 = state_61627__$1;
(statearr_61633_61698[(1)] = (5));

} else {
var statearr_61634_61699 = state_61627__$1;
(statearr_61634_61699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (15))){
var inst_61605 = (state_61627[(8)]);
var state_61627__$1 = state_61627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61627__$1,(18),to,inst_61605);
} else {
if((state_val_61628 === (21))){
var inst_61618 = (state_61627[(2)]);
var state_61627__$1 = state_61627;
var statearr_61635_61700 = state_61627__$1;
(statearr_61635_61700[(2)] = inst_61618);

(statearr_61635_61700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (13))){
var inst_61620 = (state_61627[(2)]);
var state_61627__$1 = (function (){var statearr_61636 = state_61627;
(statearr_61636[(9)] = inst_61620);

return statearr_61636;
})();
var statearr_61637_61701 = state_61627__$1;
(statearr_61637_61701[(2)] = null);

(statearr_61637_61701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (6))){
var inst_61592 = (state_61627[(7)]);
var state_61627__$1 = state_61627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61627__$1,(11),inst_61592);
} else {
if((state_val_61628 === (17))){
var inst_61613 = (state_61627[(2)]);
var state_61627__$1 = state_61627;
if(cljs.core.truth_(inst_61613)){
var statearr_61638_61702 = state_61627__$1;
(statearr_61638_61702[(1)] = (19));

} else {
var statearr_61639_61703 = state_61627__$1;
(statearr_61639_61703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (3))){
var inst_61625 = (state_61627[(2)]);
var state_61627__$1 = state_61627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61627__$1,inst_61625);
} else {
if((state_val_61628 === (12))){
var inst_61602 = (state_61627[(10)]);
var state_61627__$1 = state_61627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61627__$1,(14),inst_61602);
} else {
if((state_val_61628 === (2))){
var state_61627__$1 = state_61627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61627__$1,(4),results);
} else {
if((state_val_61628 === (19))){
var state_61627__$1 = state_61627;
var statearr_61640_61704 = state_61627__$1;
(statearr_61640_61704[(2)] = null);

(statearr_61640_61704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (11))){
var inst_61602 = (state_61627[(2)]);
var state_61627__$1 = (function (){var statearr_61641 = state_61627;
(statearr_61641[(10)] = inst_61602);

return statearr_61641;
})();
var statearr_61642_61705 = state_61627__$1;
(statearr_61642_61705[(2)] = null);

(statearr_61642_61705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (9))){
var state_61627__$1 = state_61627;
var statearr_61643_61706 = state_61627__$1;
(statearr_61643_61706[(2)] = null);

(statearr_61643_61706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (5))){
var state_61627__$1 = state_61627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61644_61707 = state_61627__$1;
(statearr_61644_61707[(1)] = (8));

} else {
var statearr_61645_61708 = state_61627__$1;
(statearr_61645_61708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (14))){
var inst_61605 = (state_61627[(8)]);
var inst_61607 = (state_61627[(11)]);
var inst_61605__$1 = (state_61627[(2)]);
var inst_61606 = (inst_61605__$1 == null);
var inst_61607__$1 = cljs.core.not.call(null,inst_61606);
var state_61627__$1 = (function (){var statearr_61646 = state_61627;
(statearr_61646[(8)] = inst_61605__$1);

(statearr_61646[(11)] = inst_61607__$1);

return statearr_61646;
})();
if(inst_61607__$1){
var statearr_61647_61709 = state_61627__$1;
(statearr_61647_61709[(1)] = (15));

} else {
var statearr_61648_61710 = state_61627__$1;
(statearr_61648_61710[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (16))){
var inst_61607 = (state_61627[(11)]);
var state_61627__$1 = state_61627;
var statearr_61649_61711 = state_61627__$1;
(statearr_61649_61711[(2)] = inst_61607);

(statearr_61649_61711[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (10))){
var inst_61599 = (state_61627[(2)]);
var state_61627__$1 = state_61627;
var statearr_61650_61712 = state_61627__$1;
(statearr_61650_61712[(2)] = inst_61599);

(statearr_61650_61712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (18))){
var inst_61610 = (state_61627[(2)]);
var state_61627__$1 = state_61627;
var statearr_61651_61713 = state_61627__$1;
(statearr_61651_61713[(2)] = inst_61610);

(statearr_61651_61713[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61628 === (8))){
var inst_61596 = cljs.core.async.close_BANG_.call(null,to);
var state_61627__$1 = state_61627;
var statearr_61652_61714 = state_61627__$1;
(statearr_61652_61714[(2)] = inst_61596);

(statearr_61652_61714[(1)] = (10));


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
});})(c__28201__auto__,jobs,results,process,async))
;
return ((function (switch__28088__auto__,c__28201__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_61656 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__);

(statearr_61656[(1)] = (1));

return statearr_61656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1 = (function (state_61627){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61657){if((e61657 instanceof Object)){
var ex__28092__auto__ = e61657;
var statearr_61658_61715 = state_61627;
(statearr_61658_61715[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61716 = state_61627;
state_61627 = G__61716;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__ = function(state_61627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1.call(this,state_61627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__,jobs,results,process,async))
})();
var state__28203__auto__ = (function (){var statearr_61659 = f__28202__auto__.call(null);
(statearr_61659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_61659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__,jobs,results,process,async))
);

return c__28201__auto__;
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
var args61717 = [];
var len__27054__auto___61720 = arguments.length;
var i__27055__auto___61721 = (0);
while(true){
if((i__27055__auto___61721 < len__27054__auto___61720)){
args61717.push((arguments[i__27055__auto___61721]));

var G__61722 = (i__27055__auto___61721 + (1));
i__27055__auto___61721 = G__61722;
continue;
} else {
}
break;
}

var G__61719 = args61717.length;
switch (G__61719) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61717.length)].join('')));

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
var args61724 = [];
var len__27054__auto___61727 = arguments.length;
var i__27055__auto___61728 = (0);
while(true){
if((i__27055__auto___61728 < len__27054__auto___61727)){
args61724.push((arguments[i__27055__auto___61728]));

var G__61729 = (i__27055__auto___61728 + (1));
i__27055__auto___61728 = G__61729;
continue;
} else {
}
break;
}

var G__61726 = args61724.length;
switch (G__61726) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61724.length)].join('')));

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
var args61731 = [];
var len__27054__auto___61784 = arguments.length;
var i__27055__auto___61785 = (0);
while(true){
if((i__27055__auto___61785 < len__27054__auto___61784)){
args61731.push((arguments[i__27055__auto___61785]));

var G__61786 = (i__27055__auto___61785 + (1));
i__27055__auto___61785 = G__61786;
continue;
} else {
}
break;
}

var G__61733 = args61731.length;
switch (G__61733) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61731.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28201__auto___61788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___61788,tc,fc){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___61788,tc,fc){
return (function (state_61759){
var state_val_61760 = (state_61759[(1)]);
if((state_val_61760 === (7))){
var inst_61755 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
var statearr_61761_61789 = state_61759__$1;
(statearr_61761_61789[(2)] = inst_61755);

(statearr_61761_61789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (1))){
var state_61759__$1 = state_61759;
var statearr_61762_61790 = state_61759__$1;
(statearr_61762_61790[(2)] = null);

(statearr_61762_61790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (4))){
var inst_61736 = (state_61759[(7)]);
var inst_61736__$1 = (state_61759[(2)]);
var inst_61737 = (inst_61736__$1 == null);
var state_61759__$1 = (function (){var statearr_61763 = state_61759;
(statearr_61763[(7)] = inst_61736__$1);

return statearr_61763;
})();
if(cljs.core.truth_(inst_61737)){
var statearr_61764_61791 = state_61759__$1;
(statearr_61764_61791[(1)] = (5));

} else {
var statearr_61765_61792 = state_61759__$1;
(statearr_61765_61792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (13))){
var state_61759__$1 = state_61759;
var statearr_61766_61793 = state_61759__$1;
(statearr_61766_61793[(2)] = null);

(statearr_61766_61793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (6))){
var inst_61736 = (state_61759[(7)]);
var inst_61742 = p.call(null,inst_61736);
var state_61759__$1 = state_61759;
if(cljs.core.truth_(inst_61742)){
var statearr_61767_61794 = state_61759__$1;
(statearr_61767_61794[(1)] = (9));

} else {
var statearr_61768_61795 = state_61759__$1;
(statearr_61768_61795[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (3))){
var inst_61757 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61759__$1,inst_61757);
} else {
if((state_val_61760 === (12))){
var state_61759__$1 = state_61759;
var statearr_61769_61796 = state_61759__$1;
(statearr_61769_61796[(2)] = null);

(statearr_61769_61796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (2))){
var state_61759__$1 = state_61759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61759__$1,(4),ch);
} else {
if((state_val_61760 === (11))){
var inst_61736 = (state_61759[(7)]);
var inst_61746 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61759__$1,(8),inst_61746,inst_61736);
} else {
if((state_val_61760 === (9))){
var state_61759__$1 = state_61759;
var statearr_61770_61797 = state_61759__$1;
(statearr_61770_61797[(2)] = tc);

(statearr_61770_61797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (5))){
var inst_61739 = cljs.core.async.close_BANG_.call(null,tc);
var inst_61740 = cljs.core.async.close_BANG_.call(null,fc);
var state_61759__$1 = (function (){var statearr_61771 = state_61759;
(statearr_61771[(8)] = inst_61739);

return statearr_61771;
})();
var statearr_61772_61798 = state_61759__$1;
(statearr_61772_61798[(2)] = inst_61740);

(statearr_61772_61798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (14))){
var inst_61753 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
var statearr_61773_61799 = state_61759__$1;
(statearr_61773_61799[(2)] = inst_61753);

(statearr_61773_61799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (10))){
var state_61759__$1 = state_61759;
var statearr_61774_61800 = state_61759__$1;
(statearr_61774_61800[(2)] = fc);

(statearr_61774_61800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (8))){
var inst_61748 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
if(cljs.core.truth_(inst_61748)){
var statearr_61775_61801 = state_61759__$1;
(statearr_61775_61801[(1)] = (12));

} else {
var statearr_61776_61802 = state_61759__$1;
(statearr_61776_61802[(1)] = (13));

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
});})(c__28201__auto___61788,tc,fc))
;
return ((function (switch__28088__auto__,c__28201__auto___61788,tc,fc){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_61780 = [null,null,null,null,null,null,null,null,null];
(statearr_61780[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_61780[(1)] = (1));

return statearr_61780;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_61759){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61781){if((e61781 instanceof Object)){
var ex__28092__auto__ = e61781;
var statearr_61782_61803 = state_61759;
(statearr_61782_61803[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61804 = state_61759;
state_61759 = G__61804;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_61759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_61759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___61788,tc,fc))
})();
var state__28203__auto__ = (function (){var statearr_61783 = f__28202__auto__.call(null);
(statearr_61783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___61788);

return statearr_61783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___61788,tc,fc))
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
var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__){
return (function (state_61868){
var state_val_61869 = (state_61868[(1)]);
if((state_val_61869 === (7))){
var inst_61864 = (state_61868[(2)]);
var state_61868__$1 = state_61868;
var statearr_61870_61891 = state_61868__$1;
(statearr_61870_61891[(2)] = inst_61864);

(statearr_61870_61891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61869 === (1))){
var inst_61848 = init;
var state_61868__$1 = (function (){var statearr_61871 = state_61868;
(statearr_61871[(7)] = inst_61848);

return statearr_61871;
})();
var statearr_61872_61892 = state_61868__$1;
(statearr_61872_61892[(2)] = null);

(statearr_61872_61892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61869 === (4))){
var inst_61851 = (state_61868[(8)]);
var inst_61851__$1 = (state_61868[(2)]);
var inst_61852 = (inst_61851__$1 == null);
var state_61868__$1 = (function (){var statearr_61873 = state_61868;
(statearr_61873[(8)] = inst_61851__$1);

return statearr_61873;
})();
if(cljs.core.truth_(inst_61852)){
var statearr_61874_61893 = state_61868__$1;
(statearr_61874_61893[(1)] = (5));

} else {
var statearr_61875_61894 = state_61868__$1;
(statearr_61875_61894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61869 === (6))){
var inst_61851 = (state_61868[(8)]);
var inst_61855 = (state_61868[(9)]);
var inst_61848 = (state_61868[(7)]);
var inst_61855__$1 = f.call(null,inst_61848,inst_61851);
var inst_61856 = cljs.core.reduced_QMARK_.call(null,inst_61855__$1);
var state_61868__$1 = (function (){var statearr_61876 = state_61868;
(statearr_61876[(9)] = inst_61855__$1);

return statearr_61876;
})();
if(inst_61856){
var statearr_61877_61895 = state_61868__$1;
(statearr_61877_61895[(1)] = (8));

} else {
var statearr_61878_61896 = state_61868__$1;
(statearr_61878_61896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61869 === (3))){
var inst_61866 = (state_61868[(2)]);
var state_61868__$1 = state_61868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61868__$1,inst_61866);
} else {
if((state_val_61869 === (2))){
var state_61868__$1 = state_61868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61868__$1,(4),ch);
} else {
if((state_val_61869 === (9))){
var inst_61855 = (state_61868[(9)]);
var inst_61848 = inst_61855;
var state_61868__$1 = (function (){var statearr_61879 = state_61868;
(statearr_61879[(7)] = inst_61848);

return statearr_61879;
})();
var statearr_61880_61897 = state_61868__$1;
(statearr_61880_61897[(2)] = null);

(statearr_61880_61897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61869 === (5))){
var inst_61848 = (state_61868[(7)]);
var state_61868__$1 = state_61868;
var statearr_61881_61898 = state_61868__$1;
(statearr_61881_61898[(2)] = inst_61848);

(statearr_61881_61898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61869 === (10))){
var inst_61862 = (state_61868[(2)]);
var state_61868__$1 = state_61868;
var statearr_61882_61899 = state_61868__$1;
(statearr_61882_61899[(2)] = inst_61862);

(statearr_61882_61899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61869 === (8))){
var inst_61855 = (state_61868[(9)]);
var inst_61858 = cljs.core.deref.call(null,inst_61855);
var state_61868__$1 = state_61868;
var statearr_61883_61900 = state_61868__$1;
(statearr_61883_61900[(2)] = inst_61858);

(statearr_61883_61900[(1)] = (10));


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
});})(c__28201__auto__))
;
return ((function (switch__28088__auto__,c__28201__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28089__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28089__auto____0 = (function (){
var statearr_61887 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61887[(0)] = cljs$core$async$reduce_$_state_machine__28089__auto__);

(statearr_61887[(1)] = (1));

return statearr_61887;
});
var cljs$core$async$reduce_$_state_machine__28089__auto____1 = (function (state_61868){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61888){if((e61888 instanceof Object)){
var ex__28092__auto__ = e61888;
var statearr_61889_61901 = state_61868;
(statearr_61889_61901[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61902 = state_61868;
state_61868 = G__61902;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28089__auto__ = function(state_61868){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28089__auto____1.call(this,state_61868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28089__auto____0;
cljs$core$async$reduce_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28089__auto____1;
return cljs$core$async$reduce_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__))
})();
var state__28203__auto__ = (function (){var statearr_61890 = f__28202__auto__.call(null);
(statearr_61890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_61890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__))
);

return c__28201__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__,f__$1){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__,f__$1){
return (function (state_61922){
var state_val_61923 = (state_61922[(1)]);
if((state_val_61923 === (1))){
var inst_61917 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_61922__$1 = state_61922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61922__$1,(2),inst_61917);
} else {
if((state_val_61923 === (2))){
var inst_61919 = (state_61922[(2)]);
var inst_61920 = f__$1.call(null,inst_61919);
var state_61922__$1 = state_61922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61922__$1,inst_61920);
} else {
return null;
}
}
});})(c__28201__auto__,f__$1))
;
return ((function (switch__28088__auto__,c__28201__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28089__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28089__auto____0 = (function (){
var statearr_61927 = [null,null,null,null,null,null,null];
(statearr_61927[(0)] = cljs$core$async$transduce_$_state_machine__28089__auto__);

(statearr_61927[(1)] = (1));

return statearr_61927;
});
var cljs$core$async$transduce_$_state_machine__28089__auto____1 = (function (state_61922){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61928){if((e61928 instanceof Object)){
var ex__28092__auto__ = e61928;
var statearr_61929_61931 = state_61922;
(statearr_61929_61931[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61932 = state_61922;
state_61922 = G__61932;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28089__auto__ = function(state_61922){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28089__auto____1.call(this,state_61922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28089__auto____0;
cljs$core$async$transduce_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28089__auto____1;
return cljs$core$async$transduce_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__,f__$1))
})();
var state__28203__auto__ = (function (){var statearr_61930 = f__28202__auto__.call(null);
(statearr_61930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_61930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__,f__$1))
);

return c__28201__auto__;
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
var args61933 = [];
var len__27054__auto___61985 = arguments.length;
var i__27055__auto___61986 = (0);
while(true){
if((i__27055__auto___61986 < len__27054__auto___61985)){
args61933.push((arguments[i__27055__auto___61986]));

var G__61987 = (i__27055__auto___61986 + (1));
i__27055__auto___61986 = G__61987;
continue;
} else {
}
break;
}

var G__61935 = args61933.length;
switch (G__61935) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61933.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__){
return (function (state_61960){
var state_val_61961 = (state_61960[(1)]);
if((state_val_61961 === (7))){
var inst_61942 = (state_61960[(2)]);
var state_61960__$1 = state_61960;
var statearr_61962_61989 = state_61960__$1;
(statearr_61962_61989[(2)] = inst_61942);

(statearr_61962_61989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (1))){
var inst_61936 = cljs.core.seq.call(null,coll);
var inst_61937 = inst_61936;
var state_61960__$1 = (function (){var statearr_61963 = state_61960;
(statearr_61963[(7)] = inst_61937);

return statearr_61963;
})();
var statearr_61964_61990 = state_61960__$1;
(statearr_61964_61990[(2)] = null);

(statearr_61964_61990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (4))){
var inst_61937 = (state_61960[(7)]);
var inst_61940 = cljs.core.first.call(null,inst_61937);
var state_61960__$1 = state_61960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61960__$1,(7),ch,inst_61940);
} else {
if((state_val_61961 === (13))){
var inst_61954 = (state_61960[(2)]);
var state_61960__$1 = state_61960;
var statearr_61965_61991 = state_61960__$1;
(statearr_61965_61991[(2)] = inst_61954);

(statearr_61965_61991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (6))){
var inst_61945 = (state_61960[(2)]);
var state_61960__$1 = state_61960;
if(cljs.core.truth_(inst_61945)){
var statearr_61966_61992 = state_61960__$1;
(statearr_61966_61992[(1)] = (8));

} else {
var statearr_61967_61993 = state_61960__$1;
(statearr_61967_61993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (3))){
var inst_61958 = (state_61960[(2)]);
var state_61960__$1 = state_61960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61960__$1,inst_61958);
} else {
if((state_val_61961 === (12))){
var state_61960__$1 = state_61960;
var statearr_61968_61994 = state_61960__$1;
(statearr_61968_61994[(2)] = null);

(statearr_61968_61994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (2))){
var inst_61937 = (state_61960[(7)]);
var state_61960__$1 = state_61960;
if(cljs.core.truth_(inst_61937)){
var statearr_61969_61995 = state_61960__$1;
(statearr_61969_61995[(1)] = (4));

} else {
var statearr_61970_61996 = state_61960__$1;
(statearr_61970_61996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (11))){
var inst_61951 = cljs.core.async.close_BANG_.call(null,ch);
var state_61960__$1 = state_61960;
var statearr_61971_61997 = state_61960__$1;
(statearr_61971_61997[(2)] = inst_61951);

(statearr_61971_61997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (9))){
var state_61960__$1 = state_61960;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61972_61998 = state_61960__$1;
(statearr_61972_61998[(1)] = (11));

} else {
var statearr_61973_61999 = state_61960__$1;
(statearr_61973_61999[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (5))){
var inst_61937 = (state_61960[(7)]);
var state_61960__$1 = state_61960;
var statearr_61974_62000 = state_61960__$1;
(statearr_61974_62000[(2)] = inst_61937);

(statearr_61974_62000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (10))){
var inst_61956 = (state_61960[(2)]);
var state_61960__$1 = state_61960;
var statearr_61975_62001 = state_61960__$1;
(statearr_61975_62001[(2)] = inst_61956);

(statearr_61975_62001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61961 === (8))){
var inst_61937 = (state_61960[(7)]);
var inst_61947 = cljs.core.next.call(null,inst_61937);
var inst_61937__$1 = inst_61947;
var state_61960__$1 = (function (){var statearr_61976 = state_61960;
(statearr_61976[(7)] = inst_61937__$1);

return statearr_61976;
})();
var statearr_61977_62002 = state_61960__$1;
(statearr_61977_62002[(2)] = null);

(statearr_61977_62002[(1)] = (2));


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
});})(c__28201__auto__))
;
return ((function (switch__28088__auto__,c__28201__auto__){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_61981 = [null,null,null,null,null,null,null,null];
(statearr_61981[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_61981[(1)] = (1));

return statearr_61981;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_61960){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_61960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e61982){if((e61982 instanceof Object)){
var ex__28092__auto__ = e61982;
var statearr_61983_62003 = state_61960;
(statearr_61983_62003[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62004 = state_61960;
state_61960 = G__62004;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_61960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_61960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__))
})();
var state__28203__auto__ = (function (){var statearr_61984 = f__28202__auto__.call(null);
(statearr_61984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_61984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__))
);

return c__28201__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async62230 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62230 = (function (mult,ch,cs,meta62231){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta62231 = meta62231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_62232,meta62231__$1){
var self__ = this;
var _62232__$1 = this;
return (new cljs.core.async.t_cljs$core$async62230(self__.mult,self__.ch,self__.cs,meta62231__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async62230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_62232){
var self__ = this;
var _62232__$1 = this;
return self__.meta62231;
});})(cs))
;

cljs.core.async.t_cljs$core$async62230.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async62230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async62230.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async62230.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62230.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62230.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62230.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62231","meta62231",1833837305,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async62230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62230";

cljs.core.async.t_cljs$core$async62230.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async62230");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async62230 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async62230(mult__$1,ch__$1,cs__$1,meta62231){
return (new cljs.core.async.t_cljs$core$async62230(mult__$1,ch__$1,cs__$1,meta62231));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async62230(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28201__auto___62455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___62455,cs,m,dchan,dctr,done){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___62455,cs,m,dchan,dctr,done){
return (function (state_62367){
var state_val_62368 = (state_62367[(1)]);
if((state_val_62368 === (7))){
var inst_62363 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62369_62456 = state_62367__$1;
(statearr_62369_62456[(2)] = inst_62363);

(statearr_62369_62456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (20))){
var inst_62266 = (state_62367[(7)]);
var inst_62278 = cljs.core.first.call(null,inst_62266);
var inst_62279 = cljs.core.nth.call(null,inst_62278,(0),null);
var inst_62280 = cljs.core.nth.call(null,inst_62278,(1),null);
var state_62367__$1 = (function (){var statearr_62370 = state_62367;
(statearr_62370[(8)] = inst_62279);

return statearr_62370;
})();
if(cljs.core.truth_(inst_62280)){
var statearr_62371_62457 = state_62367__$1;
(statearr_62371_62457[(1)] = (22));

} else {
var statearr_62372_62458 = state_62367__$1;
(statearr_62372_62458[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (27))){
var inst_62315 = (state_62367[(9)]);
var inst_62235 = (state_62367[(10)]);
var inst_62310 = (state_62367[(11)]);
var inst_62308 = (state_62367[(12)]);
var inst_62315__$1 = cljs.core._nth.call(null,inst_62308,inst_62310);
var inst_62316 = cljs.core.async.put_BANG_.call(null,inst_62315__$1,inst_62235,done);
var state_62367__$1 = (function (){var statearr_62373 = state_62367;
(statearr_62373[(9)] = inst_62315__$1);

return statearr_62373;
})();
if(cljs.core.truth_(inst_62316)){
var statearr_62374_62459 = state_62367__$1;
(statearr_62374_62459[(1)] = (30));

} else {
var statearr_62375_62460 = state_62367__$1;
(statearr_62375_62460[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (1))){
var state_62367__$1 = state_62367;
var statearr_62376_62461 = state_62367__$1;
(statearr_62376_62461[(2)] = null);

(statearr_62376_62461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (24))){
var inst_62266 = (state_62367[(7)]);
var inst_62285 = (state_62367[(2)]);
var inst_62286 = cljs.core.next.call(null,inst_62266);
var inst_62244 = inst_62286;
var inst_62245 = null;
var inst_62246 = (0);
var inst_62247 = (0);
var state_62367__$1 = (function (){var statearr_62377 = state_62367;
(statearr_62377[(13)] = inst_62247);

(statearr_62377[(14)] = inst_62285);

(statearr_62377[(15)] = inst_62244);

(statearr_62377[(16)] = inst_62245);

(statearr_62377[(17)] = inst_62246);

return statearr_62377;
})();
var statearr_62378_62462 = state_62367__$1;
(statearr_62378_62462[(2)] = null);

(statearr_62378_62462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (39))){
var state_62367__$1 = state_62367;
var statearr_62382_62463 = state_62367__$1;
(statearr_62382_62463[(2)] = null);

(statearr_62382_62463[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (4))){
var inst_62235 = (state_62367[(10)]);
var inst_62235__$1 = (state_62367[(2)]);
var inst_62236 = (inst_62235__$1 == null);
var state_62367__$1 = (function (){var statearr_62383 = state_62367;
(statearr_62383[(10)] = inst_62235__$1);

return statearr_62383;
})();
if(cljs.core.truth_(inst_62236)){
var statearr_62384_62464 = state_62367__$1;
(statearr_62384_62464[(1)] = (5));

} else {
var statearr_62385_62465 = state_62367__$1;
(statearr_62385_62465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (15))){
var inst_62247 = (state_62367[(13)]);
var inst_62244 = (state_62367[(15)]);
var inst_62245 = (state_62367[(16)]);
var inst_62246 = (state_62367[(17)]);
var inst_62262 = (state_62367[(2)]);
var inst_62263 = (inst_62247 + (1));
var tmp62379 = inst_62244;
var tmp62380 = inst_62245;
var tmp62381 = inst_62246;
var inst_62244__$1 = tmp62379;
var inst_62245__$1 = tmp62380;
var inst_62246__$1 = tmp62381;
var inst_62247__$1 = inst_62263;
var state_62367__$1 = (function (){var statearr_62386 = state_62367;
(statearr_62386[(13)] = inst_62247__$1);

(statearr_62386[(15)] = inst_62244__$1);

(statearr_62386[(16)] = inst_62245__$1);

(statearr_62386[(17)] = inst_62246__$1);

(statearr_62386[(18)] = inst_62262);

return statearr_62386;
})();
var statearr_62387_62466 = state_62367__$1;
(statearr_62387_62466[(2)] = null);

(statearr_62387_62466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (21))){
var inst_62289 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62391_62467 = state_62367__$1;
(statearr_62391_62467[(2)] = inst_62289);

(statearr_62391_62467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (31))){
var inst_62315 = (state_62367[(9)]);
var inst_62319 = done.call(null,null);
var inst_62320 = cljs.core.async.untap_STAR_.call(null,m,inst_62315);
var state_62367__$1 = (function (){var statearr_62392 = state_62367;
(statearr_62392[(19)] = inst_62319);

return statearr_62392;
})();
var statearr_62393_62468 = state_62367__$1;
(statearr_62393_62468[(2)] = inst_62320);

(statearr_62393_62468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (32))){
var inst_62310 = (state_62367[(11)]);
var inst_62309 = (state_62367[(20)]);
var inst_62307 = (state_62367[(21)]);
var inst_62308 = (state_62367[(12)]);
var inst_62322 = (state_62367[(2)]);
var inst_62323 = (inst_62310 + (1));
var tmp62388 = inst_62309;
var tmp62389 = inst_62307;
var tmp62390 = inst_62308;
var inst_62307__$1 = tmp62389;
var inst_62308__$1 = tmp62390;
var inst_62309__$1 = tmp62388;
var inst_62310__$1 = inst_62323;
var state_62367__$1 = (function (){var statearr_62394 = state_62367;
(statearr_62394[(11)] = inst_62310__$1);

(statearr_62394[(20)] = inst_62309__$1);

(statearr_62394[(21)] = inst_62307__$1);

(statearr_62394[(12)] = inst_62308__$1);

(statearr_62394[(22)] = inst_62322);

return statearr_62394;
})();
var statearr_62395_62469 = state_62367__$1;
(statearr_62395_62469[(2)] = null);

(statearr_62395_62469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (40))){
var inst_62335 = (state_62367[(23)]);
var inst_62339 = done.call(null,null);
var inst_62340 = cljs.core.async.untap_STAR_.call(null,m,inst_62335);
var state_62367__$1 = (function (){var statearr_62396 = state_62367;
(statearr_62396[(24)] = inst_62339);

return statearr_62396;
})();
var statearr_62397_62470 = state_62367__$1;
(statearr_62397_62470[(2)] = inst_62340);

(statearr_62397_62470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (33))){
var inst_62326 = (state_62367[(25)]);
var inst_62328 = cljs.core.chunked_seq_QMARK_.call(null,inst_62326);
var state_62367__$1 = state_62367;
if(inst_62328){
var statearr_62398_62471 = state_62367__$1;
(statearr_62398_62471[(1)] = (36));

} else {
var statearr_62399_62472 = state_62367__$1;
(statearr_62399_62472[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (13))){
var inst_62256 = (state_62367[(26)]);
var inst_62259 = cljs.core.async.close_BANG_.call(null,inst_62256);
var state_62367__$1 = state_62367;
var statearr_62400_62473 = state_62367__$1;
(statearr_62400_62473[(2)] = inst_62259);

(statearr_62400_62473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (22))){
var inst_62279 = (state_62367[(8)]);
var inst_62282 = cljs.core.async.close_BANG_.call(null,inst_62279);
var state_62367__$1 = state_62367;
var statearr_62401_62474 = state_62367__$1;
(statearr_62401_62474[(2)] = inst_62282);

(statearr_62401_62474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (36))){
var inst_62326 = (state_62367[(25)]);
var inst_62330 = cljs.core.chunk_first.call(null,inst_62326);
var inst_62331 = cljs.core.chunk_rest.call(null,inst_62326);
var inst_62332 = cljs.core.count.call(null,inst_62330);
var inst_62307 = inst_62331;
var inst_62308 = inst_62330;
var inst_62309 = inst_62332;
var inst_62310 = (0);
var state_62367__$1 = (function (){var statearr_62402 = state_62367;
(statearr_62402[(11)] = inst_62310);

(statearr_62402[(20)] = inst_62309);

(statearr_62402[(21)] = inst_62307);

(statearr_62402[(12)] = inst_62308);

return statearr_62402;
})();
var statearr_62403_62475 = state_62367__$1;
(statearr_62403_62475[(2)] = null);

(statearr_62403_62475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (41))){
var inst_62326 = (state_62367[(25)]);
var inst_62342 = (state_62367[(2)]);
var inst_62343 = cljs.core.next.call(null,inst_62326);
var inst_62307 = inst_62343;
var inst_62308 = null;
var inst_62309 = (0);
var inst_62310 = (0);
var state_62367__$1 = (function (){var statearr_62404 = state_62367;
(statearr_62404[(27)] = inst_62342);

(statearr_62404[(11)] = inst_62310);

(statearr_62404[(20)] = inst_62309);

(statearr_62404[(21)] = inst_62307);

(statearr_62404[(12)] = inst_62308);

return statearr_62404;
})();
var statearr_62405_62476 = state_62367__$1;
(statearr_62405_62476[(2)] = null);

(statearr_62405_62476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (43))){
var state_62367__$1 = state_62367;
var statearr_62406_62477 = state_62367__$1;
(statearr_62406_62477[(2)] = null);

(statearr_62406_62477[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (29))){
var inst_62351 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62407_62478 = state_62367__$1;
(statearr_62407_62478[(2)] = inst_62351);

(statearr_62407_62478[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (44))){
var inst_62360 = (state_62367[(2)]);
var state_62367__$1 = (function (){var statearr_62408 = state_62367;
(statearr_62408[(28)] = inst_62360);

return statearr_62408;
})();
var statearr_62409_62479 = state_62367__$1;
(statearr_62409_62479[(2)] = null);

(statearr_62409_62479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (6))){
var inst_62299 = (state_62367[(29)]);
var inst_62298 = cljs.core.deref.call(null,cs);
var inst_62299__$1 = cljs.core.keys.call(null,inst_62298);
var inst_62300 = cljs.core.count.call(null,inst_62299__$1);
var inst_62301 = cljs.core.reset_BANG_.call(null,dctr,inst_62300);
var inst_62306 = cljs.core.seq.call(null,inst_62299__$1);
var inst_62307 = inst_62306;
var inst_62308 = null;
var inst_62309 = (0);
var inst_62310 = (0);
var state_62367__$1 = (function (){var statearr_62410 = state_62367;
(statearr_62410[(29)] = inst_62299__$1);

(statearr_62410[(11)] = inst_62310);

(statearr_62410[(20)] = inst_62309);

(statearr_62410[(21)] = inst_62307);

(statearr_62410[(30)] = inst_62301);

(statearr_62410[(12)] = inst_62308);

return statearr_62410;
})();
var statearr_62411_62480 = state_62367__$1;
(statearr_62411_62480[(2)] = null);

(statearr_62411_62480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (28))){
var inst_62326 = (state_62367[(25)]);
var inst_62307 = (state_62367[(21)]);
var inst_62326__$1 = cljs.core.seq.call(null,inst_62307);
var state_62367__$1 = (function (){var statearr_62412 = state_62367;
(statearr_62412[(25)] = inst_62326__$1);

return statearr_62412;
})();
if(inst_62326__$1){
var statearr_62413_62481 = state_62367__$1;
(statearr_62413_62481[(1)] = (33));

} else {
var statearr_62414_62482 = state_62367__$1;
(statearr_62414_62482[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (25))){
var inst_62310 = (state_62367[(11)]);
var inst_62309 = (state_62367[(20)]);
var inst_62312 = (inst_62310 < inst_62309);
var inst_62313 = inst_62312;
var state_62367__$1 = state_62367;
if(cljs.core.truth_(inst_62313)){
var statearr_62415_62483 = state_62367__$1;
(statearr_62415_62483[(1)] = (27));

} else {
var statearr_62416_62484 = state_62367__$1;
(statearr_62416_62484[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (34))){
var state_62367__$1 = state_62367;
var statearr_62417_62485 = state_62367__$1;
(statearr_62417_62485[(2)] = null);

(statearr_62417_62485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (17))){
var state_62367__$1 = state_62367;
var statearr_62418_62486 = state_62367__$1;
(statearr_62418_62486[(2)] = null);

(statearr_62418_62486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (3))){
var inst_62365 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62367__$1,inst_62365);
} else {
if((state_val_62368 === (12))){
var inst_62294 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62419_62487 = state_62367__$1;
(statearr_62419_62487[(2)] = inst_62294);

(statearr_62419_62487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (2))){
var state_62367__$1 = state_62367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62367__$1,(4),ch);
} else {
if((state_val_62368 === (23))){
var state_62367__$1 = state_62367;
var statearr_62420_62488 = state_62367__$1;
(statearr_62420_62488[(2)] = null);

(statearr_62420_62488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (35))){
var inst_62349 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62421_62489 = state_62367__$1;
(statearr_62421_62489[(2)] = inst_62349);

(statearr_62421_62489[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (19))){
var inst_62266 = (state_62367[(7)]);
var inst_62270 = cljs.core.chunk_first.call(null,inst_62266);
var inst_62271 = cljs.core.chunk_rest.call(null,inst_62266);
var inst_62272 = cljs.core.count.call(null,inst_62270);
var inst_62244 = inst_62271;
var inst_62245 = inst_62270;
var inst_62246 = inst_62272;
var inst_62247 = (0);
var state_62367__$1 = (function (){var statearr_62422 = state_62367;
(statearr_62422[(13)] = inst_62247);

(statearr_62422[(15)] = inst_62244);

(statearr_62422[(16)] = inst_62245);

(statearr_62422[(17)] = inst_62246);

return statearr_62422;
})();
var statearr_62423_62490 = state_62367__$1;
(statearr_62423_62490[(2)] = null);

(statearr_62423_62490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (11))){
var inst_62244 = (state_62367[(15)]);
var inst_62266 = (state_62367[(7)]);
var inst_62266__$1 = cljs.core.seq.call(null,inst_62244);
var state_62367__$1 = (function (){var statearr_62424 = state_62367;
(statearr_62424[(7)] = inst_62266__$1);

return statearr_62424;
})();
if(inst_62266__$1){
var statearr_62425_62491 = state_62367__$1;
(statearr_62425_62491[(1)] = (16));

} else {
var statearr_62426_62492 = state_62367__$1;
(statearr_62426_62492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (9))){
var inst_62296 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62427_62493 = state_62367__$1;
(statearr_62427_62493[(2)] = inst_62296);

(statearr_62427_62493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (5))){
var inst_62242 = cljs.core.deref.call(null,cs);
var inst_62243 = cljs.core.seq.call(null,inst_62242);
var inst_62244 = inst_62243;
var inst_62245 = null;
var inst_62246 = (0);
var inst_62247 = (0);
var state_62367__$1 = (function (){var statearr_62428 = state_62367;
(statearr_62428[(13)] = inst_62247);

(statearr_62428[(15)] = inst_62244);

(statearr_62428[(16)] = inst_62245);

(statearr_62428[(17)] = inst_62246);

return statearr_62428;
})();
var statearr_62429_62494 = state_62367__$1;
(statearr_62429_62494[(2)] = null);

(statearr_62429_62494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (14))){
var state_62367__$1 = state_62367;
var statearr_62430_62495 = state_62367__$1;
(statearr_62430_62495[(2)] = null);

(statearr_62430_62495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (45))){
var inst_62357 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62431_62496 = state_62367__$1;
(statearr_62431_62496[(2)] = inst_62357);

(statearr_62431_62496[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (26))){
var inst_62299 = (state_62367[(29)]);
var inst_62353 = (state_62367[(2)]);
var inst_62354 = cljs.core.seq.call(null,inst_62299);
var state_62367__$1 = (function (){var statearr_62432 = state_62367;
(statearr_62432[(31)] = inst_62353);

return statearr_62432;
})();
if(inst_62354){
var statearr_62433_62497 = state_62367__$1;
(statearr_62433_62497[(1)] = (42));

} else {
var statearr_62434_62498 = state_62367__$1;
(statearr_62434_62498[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (16))){
var inst_62266 = (state_62367[(7)]);
var inst_62268 = cljs.core.chunked_seq_QMARK_.call(null,inst_62266);
var state_62367__$1 = state_62367;
if(inst_62268){
var statearr_62435_62499 = state_62367__$1;
(statearr_62435_62499[(1)] = (19));

} else {
var statearr_62436_62500 = state_62367__$1;
(statearr_62436_62500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (38))){
var inst_62346 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62437_62501 = state_62367__$1;
(statearr_62437_62501[(2)] = inst_62346);

(statearr_62437_62501[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (30))){
var state_62367__$1 = state_62367;
var statearr_62438_62502 = state_62367__$1;
(statearr_62438_62502[(2)] = null);

(statearr_62438_62502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (10))){
var inst_62247 = (state_62367[(13)]);
var inst_62245 = (state_62367[(16)]);
var inst_62255 = cljs.core._nth.call(null,inst_62245,inst_62247);
var inst_62256 = cljs.core.nth.call(null,inst_62255,(0),null);
var inst_62257 = cljs.core.nth.call(null,inst_62255,(1),null);
var state_62367__$1 = (function (){var statearr_62439 = state_62367;
(statearr_62439[(26)] = inst_62256);

return statearr_62439;
})();
if(cljs.core.truth_(inst_62257)){
var statearr_62440_62503 = state_62367__$1;
(statearr_62440_62503[(1)] = (13));

} else {
var statearr_62441_62504 = state_62367__$1;
(statearr_62441_62504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (18))){
var inst_62292 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62442_62505 = state_62367__$1;
(statearr_62442_62505[(2)] = inst_62292);

(statearr_62442_62505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (42))){
var state_62367__$1 = state_62367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62367__$1,(45),dchan);
} else {
if((state_val_62368 === (37))){
var inst_62326 = (state_62367[(25)]);
var inst_62235 = (state_62367[(10)]);
var inst_62335 = (state_62367[(23)]);
var inst_62335__$1 = cljs.core.first.call(null,inst_62326);
var inst_62336 = cljs.core.async.put_BANG_.call(null,inst_62335__$1,inst_62235,done);
var state_62367__$1 = (function (){var statearr_62443 = state_62367;
(statearr_62443[(23)] = inst_62335__$1);

return statearr_62443;
})();
if(cljs.core.truth_(inst_62336)){
var statearr_62444_62506 = state_62367__$1;
(statearr_62444_62506[(1)] = (39));

} else {
var statearr_62445_62507 = state_62367__$1;
(statearr_62445_62507[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (8))){
var inst_62247 = (state_62367[(13)]);
var inst_62246 = (state_62367[(17)]);
var inst_62249 = (inst_62247 < inst_62246);
var inst_62250 = inst_62249;
var state_62367__$1 = state_62367;
if(cljs.core.truth_(inst_62250)){
var statearr_62446_62508 = state_62367__$1;
(statearr_62446_62508[(1)] = (10));

} else {
var statearr_62447_62509 = state_62367__$1;
(statearr_62447_62509[(1)] = (11));

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
});})(c__28201__auto___62455,cs,m,dchan,dctr,done))
;
return ((function (switch__28088__auto__,c__28201__auto___62455,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28089__auto__ = null;
var cljs$core$async$mult_$_state_machine__28089__auto____0 = (function (){
var statearr_62451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62451[(0)] = cljs$core$async$mult_$_state_machine__28089__auto__);

(statearr_62451[(1)] = (1));

return statearr_62451;
});
var cljs$core$async$mult_$_state_machine__28089__auto____1 = (function (state_62367){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_62367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e62452){if((e62452 instanceof Object)){
var ex__28092__auto__ = e62452;
var statearr_62453_62510 = state_62367;
(statearr_62453_62510[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62511 = state_62367;
state_62367 = G__62511;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28089__auto__ = function(state_62367){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28089__auto____1.call(this,state_62367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28089__auto____0;
cljs$core$async$mult_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28089__auto____1;
return cljs$core$async$mult_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___62455,cs,m,dchan,dctr,done))
})();
var state__28203__auto__ = (function (){var statearr_62454 = f__28202__auto__.call(null);
(statearr_62454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___62455);

return statearr_62454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___62455,cs,m,dchan,dctr,done))
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
var args62512 = [];
var len__27054__auto___62515 = arguments.length;
var i__27055__auto___62516 = (0);
while(true){
if((i__27055__auto___62516 < len__27054__auto___62515)){
args62512.push((arguments[i__27055__auto___62516]));

var G__62517 = (i__27055__auto___62516 + (1));
i__27055__auto___62516 = G__62517;
continue;
} else {
}
break;
}

var G__62514 = args62512.length;
switch (G__62514) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62512.length)].join('')));

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
var len__27054__auto___62529 = arguments.length;
var i__27055__auto___62530 = (0);
while(true){
if((i__27055__auto___62530 < len__27054__auto___62529)){
args__27061__auto__.push((arguments[i__27055__auto___62530]));

var G__62531 = (i__27055__auto___62530 + (1));
i__27055__auto___62530 = G__62531;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62523){
var map__62524 = p__62523;
var map__62524__$1 = ((((!((map__62524 == null)))?((((map__62524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62524):map__62524);
var opts = map__62524__$1;
var statearr_62526_62532 = state;
(statearr_62526_62532[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__62524,map__62524__$1,opts){
return (function (val){
var statearr_62527_62533 = state;
(statearr_62527_62533[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__62524,map__62524__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_62528_62534 = state;
(statearr_62528_62534[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62519){
var G__62520 = cljs.core.first.call(null,seq62519);
var seq62519__$1 = cljs.core.next.call(null,seq62519);
var G__62521 = cljs.core.first.call(null,seq62519__$1);
var seq62519__$2 = cljs.core.next.call(null,seq62519__$1);
var G__62522 = cljs.core.first.call(null,seq62519__$2);
var seq62519__$3 = cljs.core.next.call(null,seq62519__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62520,G__62521,G__62522,seq62519__$3);
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
if(typeof cljs.core.async.t_cljs$core$async62700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62700 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62701){
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
this.meta62701 = meta62701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62702,meta62701__$1){
var self__ = this;
var _62702__$1 = this;
return (new cljs.core.async.t_cljs$core$async62700(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62701__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62702){
var self__ = this;
var _62702__$1 = this;
return self__.meta62701;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62700.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async62700.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62701","meta62701",-1981411647,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62700";

cljs.core.async.t_cljs$core$async62700.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async62700");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async62700 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async62700(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62701){
return (new cljs.core.async.t_cljs$core$async62700(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62701));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async62700(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28201__auto___62865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___62865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___62865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_62802){
var state_val_62803 = (state_62802[(1)]);
if((state_val_62803 === (7))){
var inst_62718 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
var statearr_62804_62866 = state_62802__$1;
(statearr_62804_62866[(2)] = inst_62718);

(statearr_62804_62866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (20))){
var inst_62730 = (state_62802[(7)]);
var state_62802__$1 = state_62802;
var statearr_62805_62867 = state_62802__$1;
(statearr_62805_62867[(2)] = inst_62730);

(statearr_62805_62867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (27))){
var state_62802__$1 = state_62802;
var statearr_62806_62868 = state_62802__$1;
(statearr_62806_62868[(2)] = null);

(statearr_62806_62868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (1))){
var inst_62706 = (state_62802[(8)]);
var inst_62706__$1 = calc_state.call(null);
var inst_62708 = (inst_62706__$1 == null);
var inst_62709 = cljs.core.not.call(null,inst_62708);
var state_62802__$1 = (function (){var statearr_62807 = state_62802;
(statearr_62807[(8)] = inst_62706__$1);

return statearr_62807;
})();
if(inst_62709){
var statearr_62808_62869 = state_62802__$1;
(statearr_62808_62869[(1)] = (2));

} else {
var statearr_62809_62870 = state_62802__$1;
(statearr_62809_62870[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (24))){
var inst_62753 = (state_62802[(9)]);
var inst_62776 = (state_62802[(10)]);
var inst_62762 = (state_62802[(11)]);
var inst_62776__$1 = inst_62753.call(null,inst_62762);
var state_62802__$1 = (function (){var statearr_62810 = state_62802;
(statearr_62810[(10)] = inst_62776__$1);

return statearr_62810;
})();
if(cljs.core.truth_(inst_62776__$1)){
var statearr_62811_62871 = state_62802__$1;
(statearr_62811_62871[(1)] = (29));

} else {
var statearr_62812_62872 = state_62802__$1;
(statearr_62812_62872[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (4))){
var inst_62721 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
if(cljs.core.truth_(inst_62721)){
var statearr_62813_62873 = state_62802__$1;
(statearr_62813_62873[(1)] = (8));

} else {
var statearr_62814_62874 = state_62802__$1;
(statearr_62814_62874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (15))){
var inst_62747 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
if(cljs.core.truth_(inst_62747)){
var statearr_62815_62875 = state_62802__$1;
(statearr_62815_62875[(1)] = (19));

} else {
var statearr_62816_62876 = state_62802__$1;
(statearr_62816_62876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (21))){
var inst_62752 = (state_62802[(12)]);
var inst_62752__$1 = (state_62802[(2)]);
var inst_62753 = cljs.core.get.call(null,inst_62752__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62754 = cljs.core.get.call(null,inst_62752__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62755 = cljs.core.get.call(null,inst_62752__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62802__$1 = (function (){var statearr_62817 = state_62802;
(statearr_62817[(9)] = inst_62753);

(statearr_62817[(12)] = inst_62752__$1);

(statearr_62817[(13)] = inst_62754);

return statearr_62817;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_62802__$1,(22),inst_62755);
} else {
if((state_val_62803 === (31))){
var inst_62784 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
if(cljs.core.truth_(inst_62784)){
var statearr_62818_62877 = state_62802__$1;
(statearr_62818_62877[(1)] = (32));

} else {
var statearr_62819_62878 = state_62802__$1;
(statearr_62819_62878[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (32))){
var inst_62761 = (state_62802[(14)]);
var state_62802__$1 = state_62802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62802__$1,(35),out,inst_62761);
} else {
if((state_val_62803 === (33))){
var inst_62752 = (state_62802[(12)]);
var inst_62730 = inst_62752;
var state_62802__$1 = (function (){var statearr_62820 = state_62802;
(statearr_62820[(7)] = inst_62730);

return statearr_62820;
})();
var statearr_62821_62879 = state_62802__$1;
(statearr_62821_62879[(2)] = null);

(statearr_62821_62879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (13))){
var inst_62730 = (state_62802[(7)]);
var inst_62737 = inst_62730.cljs$lang$protocol_mask$partition0$;
var inst_62738 = (inst_62737 & (64));
var inst_62739 = inst_62730.cljs$core$ISeq$;
var inst_62740 = (inst_62738) || (inst_62739);
var state_62802__$1 = state_62802;
if(cljs.core.truth_(inst_62740)){
var statearr_62822_62880 = state_62802__$1;
(statearr_62822_62880[(1)] = (16));

} else {
var statearr_62823_62881 = state_62802__$1;
(statearr_62823_62881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (22))){
var inst_62761 = (state_62802[(14)]);
var inst_62762 = (state_62802[(11)]);
var inst_62760 = (state_62802[(2)]);
var inst_62761__$1 = cljs.core.nth.call(null,inst_62760,(0),null);
var inst_62762__$1 = cljs.core.nth.call(null,inst_62760,(1),null);
var inst_62763 = (inst_62761__$1 == null);
var inst_62764 = cljs.core._EQ_.call(null,inst_62762__$1,change);
var inst_62765 = (inst_62763) || (inst_62764);
var state_62802__$1 = (function (){var statearr_62824 = state_62802;
(statearr_62824[(14)] = inst_62761__$1);

(statearr_62824[(11)] = inst_62762__$1);

return statearr_62824;
})();
if(cljs.core.truth_(inst_62765)){
var statearr_62825_62882 = state_62802__$1;
(statearr_62825_62882[(1)] = (23));

} else {
var statearr_62826_62883 = state_62802__$1;
(statearr_62826_62883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (36))){
var inst_62752 = (state_62802[(12)]);
var inst_62730 = inst_62752;
var state_62802__$1 = (function (){var statearr_62827 = state_62802;
(statearr_62827[(7)] = inst_62730);

return statearr_62827;
})();
var statearr_62828_62884 = state_62802__$1;
(statearr_62828_62884[(2)] = null);

(statearr_62828_62884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (29))){
var inst_62776 = (state_62802[(10)]);
var state_62802__$1 = state_62802;
var statearr_62829_62885 = state_62802__$1;
(statearr_62829_62885[(2)] = inst_62776);

(statearr_62829_62885[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (6))){
var state_62802__$1 = state_62802;
var statearr_62830_62886 = state_62802__$1;
(statearr_62830_62886[(2)] = false);

(statearr_62830_62886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (28))){
var inst_62772 = (state_62802[(2)]);
var inst_62773 = calc_state.call(null);
var inst_62730 = inst_62773;
var state_62802__$1 = (function (){var statearr_62831 = state_62802;
(statearr_62831[(7)] = inst_62730);

(statearr_62831[(15)] = inst_62772);

return statearr_62831;
})();
var statearr_62832_62887 = state_62802__$1;
(statearr_62832_62887[(2)] = null);

(statearr_62832_62887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (25))){
var inst_62798 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
var statearr_62833_62888 = state_62802__$1;
(statearr_62833_62888[(2)] = inst_62798);

(statearr_62833_62888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (34))){
var inst_62796 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
var statearr_62834_62889 = state_62802__$1;
(statearr_62834_62889[(2)] = inst_62796);

(statearr_62834_62889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (17))){
var state_62802__$1 = state_62802;
var statearr_62835_62890 = state_62802__$1;
(statearr_62835_62890[(2)] = false);

(statearr_62835_62890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (3))){
var state_62802__$1 = state_62802;
var statearr_62836_62891 = state_62802__$1;
(statearr_62836_62891[(2)] = false);

(statearr_62836_62891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (12))){
var inst_62800 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62802__$1,inst_62800);
} else {
if((state_val_62803 === (2))){
var inst_62706 = (state_62802[(8)]);
var inst_62711 = inst_62706.cljs$lang$protocol_mask$partition0$;
var inst_62712 = (inst_62711 & (64));
var inst_62713 = inst_62706.cljs$core$ISeq$;
var inst_62714 = (inst_62712) || (inst_62713);
var state_62802__$1 = state_62802;
if(cljs.core.truth_(inst_62714)){
var statearr_62837_62892 = state_62802__$1;
(statearr_62837_62892[(1)] = (5));

} else {
var statearr_62838_62893 = state_62802__$1;
(statearr_62838_62893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (23))){
var inst_62761 = (state_62802[(14)]);
var inst_62767 = (inst_62761 == null);
var state_62802__$1 = state_62802;
if(cljs.core.truth_(inst_62767)){
var statearr_62839_62894 = state_62802__$1;
(statearr_62839_62894[(1)] = (26));

} else {
var statearr_62840_62895 = state_62802__$1;
(statearr_62840_62895[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (35))){
var inst_62787 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
if(cljs.core.truth_(inst_62787)){
var statearr_62841_62896 = state_62802__$1;
(statearr_62841_62896[(1)] = (36));

} else {
var statearr_62842_62897 = state_62802__$1;
(statearr_62842_62897[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (19))){
var inst_62730 = (state_62802[(7)]);
var inst_62749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62730);
var state_62802__$1 = state_62802;
var statearr_62843_62898 = state_62802__$1;
(statearr_62843_62898[(2)] = inst_62749);

(statearr_62843_62898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (11))){
var inst_62730 = (state_62802[(7)]);
var inst_62734 = (inst_62730 == null);
var inst_62735 = cljs.core.not.call(null,inst_62734);
var state_62802__$1 = state_62802;
if(inst_62735){
var statearr_62844_62899 = state_62802__$1;
(statearr_62844_62899[(1)] = (13));

} else {
var statearr_62845_62900 = state_62802__$1;
(statearr_62845_62900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (9))){
var inst_62706 = (state_62802[(8)]);
var state_62802__$1 = state_62802;
var statearr_62846_62901 = state_62802__$1;
(statearr_62846_62901[(2)] = inst_62706);

(statearr_62846_62901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (5))){
var state_62802__$1 = state_62802;
var statearr_62847_62902 = state_62802__$1;
(statearr_62847_62902[(2)] = true);

(statearr_62847_62902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (14))){
var state_62802__$1 = state_62802;
var statearr_62848_62903 = state_62802__$1;
(statearr_62848_62903[(2)] = false);

(statearr_62848_62903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (26))){
var inst_62762 = (state_62802[(11)]);
var inst_62769 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_62762);
var state_62802__$1 = state_62802;
var statearr_62849_62904 = state_62802__$1;
(statearr_62849_62904[(2)] = inst_62769);

(statearr_62849_62904[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (16))){
var state_62802__$1 = state_62802;
var statearr_62850_62905 = state_62802__$1;
(statearr_62850_62905[(2)] = true);

(statearr_62850_62905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (38))){
var inst_62792 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
var statearr_62851_62906 = state_62802__$1;
(statearr_62851_62906[(2)] = inst_62792);

(statearr_62851_62906[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (30))){
var inst_62753 = (state_62802[(9)]);
var inst_62762 = (state_62802[(11)]);
var inst_62754 = (state_62802[(13)]);
var inst_62779 = cljs.core.empty_QMARK_.call(null,inst_62753);
var inst_62780 = inst_62754.call(null,inst_62762);
var inst_62781 = cljs.core.not.call(null,inst_62780);
var inst_62782 = (inst_62779) && (inst_62781);
var state_62802__$1 = state_62802;
var statearr_62852_62907 = state_62802__$1;
(statearr_62852_62907[(2)] = inst_62782);

(statearr_62852_62907[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (10))){
var inst_62706 = (state_62802[(8)]);
var inst_62726 = (state_62802[(2)]);
var inst_62727 = cljs.core.get.call(null,inst_62726,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62728 = cljs.core.get.call(null,inst_62726,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62729 = cljs.core.get.call(null,inst_62726,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62730 = inst_62706;
var state_62802__$1 = (function (){var statearr_62853 = state_62802;
(statearr_62853[(7)] = inst_62730);

(statearr_62853[(16)] = inst_62728);

(statearr_62853[(17)] = inst_62729);

(statearr_62853[(18)] = inst_62727);

return statearr_62853;
})();
var statearr_62854_62908 = state_62802__$1;
(statearr_62854_62908[(2)] = null);

(statearr_62854_62908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (18))){
var inst_62744 = (state_62802[(2)]);
var state_62802__$1 = state_62802;
var statearr_62855_62909 = state_62802__$1;
(statearr_62855_62909[(2)] = inst_62744);

(statearr_62855_62909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (37))){
var state_62802__$1 = state_62802;
var statearr_62856_62910 = state_62802__$1;
(statearr_62856_62910[(2)] = null);

(statearr_62856_62910[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62803 === (8))){
var inst_62706 = (state_62802[(8)]);
var inst_62723 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62706);
var state_62802__$1 = state_62802;
var statearr_62857_62911 = state_62802__$1;
(statearr_62857_62911[(2)] = inst_62723);

(statearr_62857_62911[(1)] = (10));


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
});})(c__28201__auto___62865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28088__auto__,c__28201__auto___62865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28089__auto__ = null;
var cljs$core$async$mix_$_state_machine__28089__auto____0 = (function (){
var statearr_62861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62861[(0)] = cljs$core$async$mix_$_state_machine__28089__auto__);

(statearr_62861[(1)] = (1));

return statearr_62861;
});
var cljs$core$async$mix_$_state_machine__28089__auto____1 = (function (state_62802){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_62802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e62862){if((e62862 instanceof Object)){
var ex__28092__auto__ = e62862;
var statearr_62863_62912 = state_62802;
(statearr_62863_62912[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62913 = state_62802;
state_62802 = G__62913;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28089__auto__ = function(state_62802){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28089__auto____1.call(this,state_62802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28089__auto____0;
cljs$core$async$mix_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28089__auto____1;
return cljs$core$async$mix_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___62865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28203__auto__ = (function (){var statearr_62864 = f__28202__auto__.call(null);
(statearr_62864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___62865);

return statearr_62864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___62865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args62914 = [];
var len__27054__auto___62917 = arguments.length;
var i__27055__auto___62918 = (0);
while(true){
if((i__27055__auto___62918 < len__27054__auto___62917)){
args62914.push((arguments[i__27055__auto___62918]));

var G__62919 = (i__27055__auto___62918 + (1));
i__27055__auto___62918 = G__62919;
continue;
} else {
}
break;
}

var G__62916 = args62914.length;
switch (G__62916) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62914.length)].join('')));

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
var args62922 = [];
var len__27054__auto___63047 = arguments.length;
var i__27055__auto___63048 = (0);
while(true){
if((i__27055__auto___63048 < len__27054__auto___63047)){
args62922.push((arguments[i__27055__auto___63048]));

var G__63049 = (i__27055__auto___63048 + (1));
i__27055__auto___63048 = G__63049;
continue;
} else {
}
break;
}

var G__62924 = args62922.length;
switch (G__62924) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62922.length)].join('')));

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
return (function (p1__62921_SHARP_){
if(cljs.core.truth_(p1__62921_SHARP_.call(null,topic))){
return p1__62921_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__62921_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async62925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62925 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62926){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62926 = meta62926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_62927,meta62926__$1){
var self__ = this;
var _62927__$1 = this;
return (new cljs.core.async.t_cljs$core$async62925(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62926__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_62927){
var self__ = this;
var _62927__$1 = this;
return self__.meta62926;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62925.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62925.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62926","meta62926",-1066531682,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62925";

cljs.core.async.t_cljs$core$async62925.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async62925");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async62925 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async62925(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62926){
return (new cljs.core.async.t_cljs$core$async62925(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62926));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async62925(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28201__auto___63051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___63051,mults,ensure_mult,p){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___63051,mults,ensure_mult,p){
return (function (state_62999){
var state_val_63000 = (state_62999[(1)]);
if((state_val_63000 === (7))){
var inst_62995 = (state_62999[(2)]);
var state_62999__$1 = state_62999;
var statearr_63001_63052 = state_62999__$1;
(statearr_63001_63052[(2)] = inst_62995);

(statearr_63001_63052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (20))){
var state_62999__$1 = state_62999;
var statearr_63002_63053 = state_62999__$1;
(statearr_63002_63053[(2)] = null);

(statearr_63002_63053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (1))){
var state_62999__$1 = state_62999;
var statearr_63003_63054 = state_62999__$1;
(statearr_63003_63054[(2)] = null);

(statearr_63003_63054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (24))){
var inst_62978 = (state_62999[(7)]);
var inst_62987 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_62978);
var state_62999__$1 = state_62999;
var statearr_63004_63055 = state_62999__$1;
(statearr_63004_63055[(2)] = inst_62987);

(statearr_63004_63055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (4))){
var inst_62930 = (state_62999[(8)]);
var inst_62930__$1 = (state_62999[(2)]);
var inst_62931 = (inst_62930__$1 == null);
var state_62999__$1 = (function (){var statearr_63005 = state_62999;
(statearr_63005[(8)] = inst_62930__$1);

return statearr_63005;
})();
if(cljs.core.truth_(inst_62931)){
var statearr_63006_63056 = state_62999__$1;
(statearr_63006_63056[(1)] = (5));

} else {
var statearr_63007_63057 = state_62999__$1;
(statearr_63007_63057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (15))){
var inst_62972 = (state_62999[(2)]);
var state_62999__$1 = state_62999;
var statearr_63008_63058 = state_62999__$1;
(statearr_63008_63058[(2)] = inst_62972);

(statearr_63008_63058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (21))){
var inst_62992 = (state_62999[(2)]);
var state_62999__$1 = (function (){var statearr_63009 = state_62999;
(statearr_63009[(9)] = inst_62992);

return statearr_63009;
})();
var statearr_63010_63059 = state_62999__$1;
(statearr_63010_63059[(2)] = null);

(statearr_63010_63059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (13))){
var inst_62954 = (state_62999[(10)]);
var inst_62956 = cljs.core.chunked_seq_QMARK_.call(null,inst_62954);
var state_62999__$1 = state_62999;
if(inst_62956){
var statearr_63011_63060 = state_62999__$1;
(statearr_63011_63060[(1)] = (16));

} else {
var statearr_63012_63061 = state_62999__$1;
(statearr_63012_63061[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (22))){
var inst_62984 = (state_62999[(2)]);
var state_62999__$1 = state_62999;
if(cljs.core.truth_(inst_62984)){
var statearr_63013_63062 = state_62999__$1;
(statearr_63013_63062[(1)] = (23));

} else {
var statearr_63014_63063 = state_62999__$1;
(statearr_63014_63063[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (6))){
var inst_62930 = (state_62999[(8)]);
var inst_62980 = (state_62999[(11)]);
var inst_62978 = (state_62999[(7)]);
var inst_62978__$1 = topic_fn.call(null,inst_62930);
var inst_62979 = cljs.core.deref.call(null,mults);
var inst_62980__$1 = cljs.core.get.call(null,inst_62979,inst_62978__$1);
var state_62999__$1 = (function (){var statearr_63015 = state_62999;
(statearr_63015[(11)] = inst_62980__$1);

(statearr_63015[(7)] = inst_62978__$1);

return statearr_63015;
})();
if(cljs.core.truth_(inst_62980__$1)){
var statearr_63016_63064 = state_62999__$1;
(statearr_63016_63064[(1)] = (19));

} else {
var statearr_63017_63065 = state_62999__$1;
(statearr_63017_63065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (25))){
var inst_62989 = (state_62999[(2)]);
var state_62999__$1 = state_62999;
var statearr_63018_63066 = state_62999__$1;
(statearr_63018_63066[(2)] = inst_62989);

(statearr_63018_63066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (17))){
var inst_62954 = (state_62999[(10)]);
var inst_62963 = cljs.core.first.call(null,inst_62954);
var inst_62964 = cljs.core.async.muxch_STAR_.call(null,inst_62963);
var inst_62965 = cljs.core.async.close_BANG_.call(null,inst_62964);
var inst_62966 = cljs.core.next.call(null,inst_62954);
var inst_62940 = inst_62966;
var inst_62941 = null;
var inst_62942 = (0);
var inst_62943 = (0);
var state_62999__$1 = (function (){var statearr_63019 = state_62999;
(statearr_63019[(12)] = inst_62941);

(statearr_63019[(13)] = inst_62942);

(statearr_63019[(14)] = inst_62940);

(statearr_63019[(15)] = inst_62943);

(statearr_63019[(16)] = inst_62965);

return statearr_63019;
})();
var statearr_63020_63067 = state_62999__$1;
(statearr_63020_63067[(2)] = null);

(statearr_63020_63067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (3))){
var inst_62997 = (state_62999[(2)]);
var state_62999__$1 = state_62999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62999__$1,inst_62997);
} else {
if((state_val_63000 === (12))){
var inst_62974 = (state_62999[(2)]);
var state_62999__$1 = state_62999;
var statearr_63021_63068 = state_62999__$1;
(statearr_63021_63068[(2)] = inst_62974);

(statearr_63021_63068[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (2))){
var state_62999__$1 = state_62999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62999__$1,(4),ch);
} else {
if((state_val_63000 === (23))){
var state_62999__$1 = state_62999;
var statearr_63022_63069 = state_62999__$1;
(statearr_63022_63069[(2)] = null);

(statearr_63022_63069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (19))){
var inst_62930 = (state_62999[(8)]);
var inst_62980 = (state_62999[(11)]);
var inst_62982 = cljs.core.async.muxch_STAR_.call(null,inst_62980);
var state_62999__$1 = state_62999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62999__$1,(22),inst_62982,inst_62930);
} else {
if((state_val_63000 === (11))){
var inst_62940 = (state_62999[(14)]);
var inst_62954 = (state_62999[(10)]);
var inst_62954__$1 = cljs.core.seq.call(null,inst_62940);
var state_62999__$1 = (function (){var statearr_63023 = state_62999;
(statearr_63023[(10)] = inst_62954__$1);

return statearr_63023;
})();
if(inst_62954__$1){
var statearr_63024_63070 = state_62999__$1;
(statearr_63024_63070[(1)] = (13));

} else {
var statearr_63025_63071 = state_62999__$1;
(statearr_63025_63071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (9))){
var inst_62976 = (state_62999[(2)]);
var state_62999__$1 = state_62999;
var statearr_63026_63072 = state_62999__$1;
(statearr_63026_63072[(2)] = inst_62976);

(statearr_63026_63072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (5))){
var inst_62937 = cljs.core.deref.call(null,mults);
var inst_62938 = cljs.core.vals.call(null,inst_62937);
var inst_62939 = cljs.core.seq.call(null,inst_62938);
var inst_62940 = inst_62939;
var inst_62941 = null;
var inst_62942 = (0);
var inst_62943 = (0);
var state_62999__$1 = (function (){var statearr_63027 = state_62999;
(statearr_63027[(12)] = inst_62941);

(statearr_63027[(13)] = inst_62942);

(statearr_63027[(14)] = inst_62940);

(statearr_63027[(15)] = inst_62943);

return statearr_63027;
})();
var statearr_63028_63073 = state_62999__$1;
(statearr_63028_63073[(2)] = null);

(statearr_63028_63073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (14))){
var state_62999__$1 = state_62999;
var statearr_63032_63074 = state_62999__$1;
(statearr_63032_63074[(2)] = null);

(statearr_63032_63074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (16))){
var inst_62954 = (state_62999[(10)]);
var inst_62958 = cljs.core.chunk_first.call(null,inst_62954);
var inst_62959 = cljs.core.chunk_rest.call(null,inst_62954);
var inst_62960 = cljs.core.count.call(null,inst_62958);
var inst_62940 = inst_62959;
var inst_62941 = inst_62958;
var inst_62942 = inst_62960;
var inst_62943 = (0);
var state_62999__$1 = (function (){var statearr_63033 = state_62999;
(statearr_63033[(12)] = inst_62941);

(statearr_63033[(13)] = inst_62942);

(statearr_63033[(14)] = inst_62940);

(statearr_63033[(15)] = inst_62943);

return statearr_63033;
})();
var statearr_63034_63075 = state_62999__$1;
(statearr_63034_63075[(2)] = null);

(statearr_63034_63075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (10))){
var inst_62941 = (state_62999[(12)]);
var inst_62942 = (state_62999[(13)]);
var inst_62940 = (state_62999[(14)]);
var inst_62943 = (state_62999[(15)]);
var inst_62948 = cljs.core._nth.call(null,inst_62941,inst_62943);
var inst_62949 = cljs.core.async.muxch_STAR_.call(null,inst_62948);
var inst_62950 = cljs.core.async.close_BANG_.call(null,inst_62949);
var inst_62951 = (inst_62943 + (1));
var tmp63029 = inst_62941;
var tmp63030 = inst_62942;
var tmp63031 = inst_62940;
var inst_62940__$1 = tmp63031;
var inst_62941__$1 = tmp63029;
var inst_62942__$1 = tmp63030;
var inst_62943__$1 = inst_62951;
var state_62999__$1 = (function (){var statearr_63035 = state_62999;
(statearr_63035[(12)] = inst_62941__$1);

(statearr_63035[(17)] = inst_62950);

(statearr_63035[(13)] = inst_62942__$1);

(statearr_63035[(14)] = inst_62940__$1);

(statearr_63035[(15)] = inst_62943__$1);

return statearr_63035;
})();
var statearr_63036_63076 = state_62999__$1;
(statearr_63036_63076[(2)] = null);

(statearr_63036_63076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (18))){
var inst_62969 = (state_62999[(2)]);
var state_62999__$1 = state_62999;
var statearr_63037_63077 = state_62999__$1;
(statearr_63037_63077[(2)] = inst_62969);

(statearr_63037_63077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63000 === (8))){
var inst_62942 = (state_62999[(13)]);
var inst_62943 = (state_62999[(15)]);
var inst_62945 = (inst_62943 < inst_62942);
var inst_62946 = inst_62945;
var state_62999__$1 = state_62999;
if(cljs.core.truth_(inst_62946)){
var statearr_63038_63078 = state_62999__$1;
(statearr_63038_63078[(1)] = (10));

} else {
var statearr_63039_63079 = state_62999__$1;
(statearr_63039_63079[(1)] = (11));

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
});})(c__28201__auto___63051,mults,ensure_mult,p))
;
return ((function (switch__28088__auto__,c__28201__auto___63051,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_63043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63043[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_63043[(1)] = (1));

return statearr_63043;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_62999){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_62999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63044){if((e63044 instanceof Object)){
var ex__28092__auto__ = e63044;
var statearr_63045_63080 = state_62999;
(statearr_63045_63080[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63081 = state_62999;
state_62999 = G__63081;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_62999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_62999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___63051,mults,ensure_mult,p))
})();
var state__28203__auto__ = (function (){var statearr_63046 = f__28202__auto__.call(null);
(statearr_63046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___63051);

return statearr_63046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___63051,mults,ensure_mult,p))
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
var args63082 = [];
var len__27054__auto___63085 = arguments.length;
var i__27055__auto___63086 = (0);
while(true){
if((i__27055__auto___63086 < len__27054__auto___63085)){
args63082.push((arguments[i__27055__auto___63086]));

var G__63087 = (i__27055__auto___63086 + (1));
i__27055__auto___63086 = G__63087;
continue;
} else {
}
break;
}

var G__63084 = args63082.length;
switch (G__63084) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63082.length)].join('')));

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
var args63089 = [];
var len__27054__auto___63092 = arguments.length;
var i__27055__auto___63093 = (0);
while(true){
if((i__27055__auto___63093 < len__27054__auto___63092)){
args63089.push((arguments[i__27055__auto___63093]));

var G__63094 = (i__27055__auto___63093 + (1));
i__27055__auto___63093 = G__63094;
continue;
} else {
}
break;
}

var G__63091 = args63089.length;
switch (G__63091) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63089.length)].join('')));

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
var args63096 = [];
var len__27054__auto___63167 = arguments.length;
var i__27055__auto___63168 = (0);
while(true){
if((i__27055__auto___63168 < len__27054__auto___63167)){
args63096.push((arguments[i__27055__auto___63168]));

var G__63169 = (i__27055__auto___63168 + (1));
i__27055__auto___63168 = G__63169;
continue;
} else {
}
break;
}

var G__63098 = args63096.length;
switch (G__63098) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63096.length)].join('')));

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
var c__28201__auto___63171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___63171,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___63171,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_63137){
var state_val_63138 = (state_63137[(1)]);
if((state_val_63138 === (7))){
var state_63137__$1 = state_63137;
var statearr_63139_63172 = state_63137__$1;
(statearr_63139_63172[(2)] = null);

(statearr_63139_63172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (1))){
var state_63137__$1 = state_63137;
var statearr_63140_63173 = state_63137__$1;
(statearr_63140_63173[(2)] = null);

(statearr_63140_63173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (4))){
var inst_63101 = (state_63137[(7)]);
var inst_63103 = (inst_63101 < cnt);
var state_63137__$1 = state_63137;
if(cljs.core.truth_(inst_63103)){
var statearr_63141_63174 = state_63137__$1;
(statearr_63141_63174[(1)] = (6));

} else {
var statearr_63142_63175 = state_63137__$1;
(statearr_63142_63175[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (15))){
var inst_63133 = (state_63137[(2)]);
var state_63137__$1 = state_63137;
var statearr_63143_63176 = state_63137__$1;
(statearr_63143_63176[(2)] = inst_63133);

(statearr_63143_63176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (13))){
var inst_63126 = cljs.core.async.close_BANG_.call(null,out);
var state_63137__$1 = state_63137;
var statearr_63144_63177 = state_63137__$1;
(statearr_63144_63177[(2)] = inst_63126);

(statearr_63144_63177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (6))){
var state_63137__$1 = state_63137;
var statearr_63145_63178 = state_63137__$1;
(statearr_63145_63178[(2)] = null);

(statearr_63145_63178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (3))){
var inst_63135 = (state_63137[(2)]);
var state_63137__$1 = state_63137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63137__$1,inst_63135);
} else {
if((state_val_63138 === (12))){
var inst_63123 = (state_63137[(8)]);
var inst_63123__$1 = (state_63137[(2)]);
var inst_63124 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_63123__$1);
var state_63137__$1 = (function (){var statearr_63146 = state_63137;
(statearr_63146[(8)] = inst_63123__$1);

return statearr_63146;
})();
if(cljs.core.truth_(inst_63124)){
var statearr_63147_63179 = state_63137__$1;
(statearr_63147_63179[(1)] = (13));

} else {
var statearr_63148_63180 = state_63137__$1;
(statearr_63148_63180[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (2))){
var inst_63100 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_63101 = (0);
var state_63137__$1 = (function (){var statearr_63149 = state_63137;
(statearr_63149[(7)] = inst_63101);

(statearr_63149[(9)] = inst_63100);

return statearr_63149;
})();
var statearr_63150_63181 = state_63137__$1;
(statearr_63150_63181[(2)] = null);

(statearr_63150_63181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (11))){
var inst_63101 = (state_63137[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63137,(10),Object,null,(9));
var inst_63110 = chs__$1.call(null,inst_63101);
var inst_63111 = done.call(null,inst_63101);
var inst_63112 = cljs.core.async.take_BANG_.call(null,inst_63110,inst_63111);
var state_63137__$1 = state_63137;
var statearr_63151_63182 = state_63137__$1;
(statearr_63151_63182[(2)] = inst_63112);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63137__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (9))){
var inst_63101 = (state_63137[(7)]);
var inst_63114 = (state_63137[(2)]);
var inst_63115 = (inst_63101 + (1));
var inst_63101__$1 = inst_63115;
var state_63137__$1 = (function (){var statearr_63152 = state_63137;
(statearr_63152[(10)] = inst_63114);

(statearr_63152[(7)] = inst_63101__$1);

return statearr_63152;
})();
var statearr_63153_63183 = state_63137__$1;
(statearr_63153_63183[(2)] = null);

(statearr_63153_63183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (5))){
var inst_63121 = (state_63137[(2)]);
var state_63137__$1 = (function (){var statearr_63154 = state_63137;
(statearr_63154[(11)] = inst_63121);

return statearr_63154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63137__$1,(12),dchan);
} else {
if((state_val_63138 === (14))){
var inst_63123 = (state_63137[(8)]);
var inst_63128 = cljs.core.apply.call(null,f,inst_63123);
var state_63137__$1 = state_63137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63137__$1,(16),out,inst_63128);
} else {
if((state_val_63138 === (16))){
var inst_63130 = (state_63137[(2)]);
var state_63137__$1 = (function (){var statearr_63155 = state_63137;
(statearr_63155[(12)] = inst_63130);

return statearr_63155;
})();
var statearr_63156_63184 = state_63137__$1;
(statearr_63156_63184[(2)] = null);

(statearr_63156_63184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (10))){
var inst_63105 = (state_63137[(2)]);
var inst_63106 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_63137__$1 = (function (){var statearr_63157 = state_63137;
(statearr_63157[(13)] = inst_63105);

return statearr_63157;
})();
var statearr_63158_63185 = state_63137__$1;
(statearr_63158_63185[(2)] = inst_63106);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63137__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63138 === (8))){
var inst_63119 = (state_63137[(2)]);
var state_63137__$1 = state_63137;
var statearr_63159_63186 = state_63137__$1;
(statearr_63159_63186[(2)] = inst_63119);

(statearr_63159_63186[(1)] = (5));


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
});})(c__28201__auto___63171,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28088__auto__,c__28201__auto___63171,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_63163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63163[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_63163[(1)] = (1));

return statearr_63163;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_63137){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_63137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63164){if((e63164 instanceof Object)){
var ex__28092__auto__ = e63164;
var statearr_63165_63187 = state_63137;
(statearr_63165_63187[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63188 = state_63137;
state_63137 = G__63188;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_63137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_63137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___63171,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28203__auto__ = (function (){var statearr_63166 = f__28202__auto__.call(null);
(statearr_63166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___63171);

return statearr_63166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___63171,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args63190 = [];
var len__27054__auto___63248 = arguments.length;
var i__27055__auto___63249 = (0);
while(true){
if((i__27055__auto___63249 < len__27054__auto___63248)){
args63190.push((arguments[i__27055__auto___63249]));

var G__63250 = (i__27055__auto___63249 + (1));
i__27055__auto___63249 = G__63250;
continue;
} else {
}
break;
}

var G__63192 = args63190.length;
switch (G__63192) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63190.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28201__auto___63252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___63252,out){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___63252,out){
return (function (state_63224){
var state_val_63225 = (state_63224[(1)]);
if((state_val_63225 === (7))){
var inst_63203 = (state_63224[(7)]);
var inst_63204 = (state_63224[(8)]);
var inst_63203__$1 = (state_63224[(2)]);
var inst_63204__$1 = cljs.core.nth.call(null,inst_63203__$1,(0),null);
var inst_63205 = cljs.core.nth.call(null,inst_63203__$1,(1),null);
var inst_63206 = (inst_63204__$1 == null);
var state_63224__$1 = (function (){var statearr_63226 = state_63224;
(statearr_63226[(9)] = inst_63205);

(statearr_63226[(7)] = inst_63203__$1);

(statearr_63226[(8)] = inst_63204__$1);

return statearr_63226;
})();
if(cljs.core.truth_(inst_63206)){
var statearr_63227_63253 = state_63224__$1;
(statearr_63227_63253[(1)] = (8));

} else {
var statearr_63228_63254 = state_63224__$1;
(statearr_63228_63254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (1))){
var inst_63193 = cljs.core.vec.call(null,chs);
var inst_63194 = inst_63193;
var state_63224__$1 = (function (){var statearr_63229 = state_63224;
(statearr_63229[(10)] = inst_63194);

return statearr_63229;
})();
var statearr_63230_63255 = state_63224__$1;
(statearr_63230_63255[(2)] = null);

(statearr_63230_63255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (4))){
var inst_63194 = (state_63224[(10)]);
var state_63224__$1 = state_63224;
return cljs.core.async.ioc_alts_BANG_.call(null,state_63224__$1,(7),inst_63194);
} else {
if((state_val_63225 === (6))){
var inst_63220 = (state_63224[(2)]);
var state_63224__$1 = state_63224;
var statearr_63231_63256 = state_63224__$1;
(statearr_63231_63256[(2)] = inst_63220);

(statearr_63231_63256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (3))){
var inst_63222 = (state_63224[(2)]);
var state_63224__$1 = state_63224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63224__$1,inst_63222);
} else {
if((state_val_63225 === (2))){
var inst_63194 = (state_63224[(10)]);
var inst_63196 = cljs.core.count.call(null,inst_63194);
var inst_63197 = (inst_63196 > (0));
var state_63224__$1 = state_63224;
if(cljs.core.truth_(inst_63197)){
var statearr_63233_63257 = state_63224__$1;
(statearr_63233_63257[(1)] = (4));

} else {
var statearr_63234_63258 = state_63224__$1;
(statearr_63234_63258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (11))){
var inst_63194 = (state_63224[(10)]);
var inst_63213 = (state_63224[(2)]);
var tmp63232 = inst_63194;
var inst_63194__$1 = tmp63232;
var state_63224__$1 = (function (){var statearr_63235 = state_63224;
(statearr_63235[(11)] = inst_63213);

(statearr_63235[(10)] = inst_63194__$1);

return statearr_63235;
})();
var statearr_63236_63259 = state_63224__$1;
(statearr_63236_63259[(2)] = null);

(statearr_63236_63259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (9))){
var inst_63204 = (state_63224[(8)]);
var state_63224__$1 = state_63224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63224__$1,(11),out,inst_63204);
} else {
if((state_val_63225 === (5))){
var inst_63218 = cljs.core.async.close_BANG_.call(null,out);
var state_63224__$1 = state_63224;
var statearr_63237_63260 = state_63224__$1;
(statearr_63237_63260[(2)] = inst_63218);

(statearr_63237_63260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (10))){
var inst_63216 = (state_63224[(2)]);
var state_63224__$1 = state_63224;
var statearr_63238_63261 = state_63224__$1;
(statearr_63238_63261[(2)] = inst_63216);

(statearr_63238_63261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63225 === (8))){
var inst_63205 = (state_63224[(9)]);
var inst_63203 = (state_63224[(7)]);
var inst_63204 = (state_63224[(8)]);
var inst_63194 = (state_63224[(10)]);
var inst_63208 = (function (){var cs = inst_63194;
var vec__63199 = inst_63203;
var v = inst_63204;
var c = inst_63205;
return ((function (cs,vec__63199,v,c,inst_63205,inst_63203,inst_63204,inst_63194,state_val_63225,c__28201__auto___63252,out){
return (function (p1__63189_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__63189_SHARP_);
});
;})(cs,vec__63199,v,c,inst_63205,inst_63203,inst_63204,inst_63194,state_val_63225,c__28201__auto___63252,out))
})();
var inst_63209 = cljs.core.filterv.call(null,inst_63208,inst_63194);
var inst_63194__$1 = inst_63209;
var state_63224__$1 = (function (){var statearr_63239 = state_63224;
(statearr_63239[(10)] = inst_63194__$1);

return statearr_63239;
})();
var statearr_63240_63262 = state_63224__$1;
(statearr_63240_63262[(2)] = null);

(statearr_63240_63262[(1)] = (2));


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
});})(c__28201__auto___63252,out))
;
return ((function (switch__28088__auto__,c__28201__auto___63252,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_63244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63244[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_63244[(1)] = (1));

return statearr_63244;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_63224){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_63224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63245){if((e63245 instanceof Object)){
var ex__28092__auto__ = e63245;
var statearr_63246_63263 = state_63224;
(statearr_63246_63263[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63264 = state_63224;
state_63224 = G__63264;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_63224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_63224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___63252,out))
})();
var state__28203__auto__ = (function (){var statearr_63247 = f__28202__auto__.call(null);
(statearr_63247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___63252);

return statearr_63247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___63252,out))
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
var args63265 = [];
var len__27054__auto___63314 = arguments.length;
var i__27055__auto___63315 = (0);
while(true){
if((i__27055__auto___63315 < len__27054__auto___63314)){
args63265.push((arguments[i__27055__auto___63315]));

var G__63316 = (i__27055__auto___63315 + (1));
i__27055__auto___63315 = G__63316;
continue;
} else {
}
break;
}

var G__63267 = args63265.length;
switch (G__63267) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63265.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28201__auto___63318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___63318,out){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___63318,out){
return (function (state_63291){
var state_val_63292 = (state_63291[(1)]);
if((state_val_63292 === (7))){
var inst_63273 = (state_63291[(7)]);
var inst_63273__$1 = (state_63291[(2)]);
var inst_63274 = (inst_63273__$1 == null);
var inst_63275 = cljs.core.not.call(null,inst_63274);
var state_63291__$1 = (function (){var statearr_63293 = state_63291;
(statearr_63293[(7)] = inst_63273__$1);

return statearr_63293;
})();
if(inst_63275){
var statearr_63294_63319 = state_63291__$1;
(statearr_63294_63319[(1)] = (8));

} else {
var statearr_63295_63320 = state_63291__$1;
(statearr_63295_63320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (1))){
var inst_63268 = (0);
var state_63291__$1 = (function (){var statearr_63296 = state_63291;
(statearr_63296[(8)] = inst_63268);

return statearr_63296;
})();
var statearr_63297_63321 = state_63291__$1;
(statearr_63297_63321[(2)] = null);

(statearr_63297_63321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (4))){
var state_63291__$1 = state_63291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63291__$1,(7),ch);
} else {
if((state_val_63292 === (6))){
var inst_63286 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63298_63322 = state_63291__$1;
(statearr_63298_63322[(2)] = inst_63286);

(statearr_63298_63322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (3))){
var inst_63288 = (state_63291[(2)]);
var inst_63289 = cljs.core.async.close_BANG_.call(null,out);
var state_63291__$1 = (function (){var statearr_63299 = state_63291;
(statearr_63299[(9)] = inst_63288);

return statearr_63299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63291__$1,inst_63289);
} else {
if((state_val_63292 === (2))){
var inst_63268 = (state_63291[(8)]);
var inst_63270 = (inst_63268 < n);
var state_63291__$1 = state_63291;
if(cljs.core.truth_(inst_63270)){
var statearr_63300_63323 = state_63291__$1;
(statearr_63300_63323[(1)] = (4));

} else {
var statearr_63301_63324 = state_63291__$1;
(statearr_63301_63324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (11))){
var inst_63268 = (state_63291[(8)]);
var inst_63278 = (state_63291[(2)]);
var inst_63279 = (inst_63268 + (1));
var inst_63268__$1 = inst_63279;
var state_63291__$1 = (function (){var statearr_63302 = state_63291;
(statearr_63302[(8)] = inst_63268__$1);

(statearr_63302[(10)] = inst_63278);

return statearr_63302;
})();
var statearr_63303_63325 = state_63291__$1;
(statearr_63303_63325[(2)] = null);

(statearr_63303_63325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (9))){
var state_63291__$1 = state_63291;
var statearr_63304_63326 = state_63291__$1;
(statearr_63304_63326[(2)] = null);

(statearr_63304_63326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (5))){
var state_63291__$1 = state_63291;
var statearr_63305_63327 = state_63291__$1;
(statearr_63305_63327[(2)] = null);

(statearr_63305_63327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (10))){
var inst_63283 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63306_63328 = state_63291__$1;
(statearr_63306_63328[(2)] = inst_63283);

(statearr_63306_63328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (8))){
var inst_63273 = (state_63291[(7)]);
var state_63291__$1 = state_63291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63291__$1,(11),out,inst_63273);
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
});})(c__28201__auto___63318,out))
;
return ((function (switch__28088__auto__,c__28201__auto___63318,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_63310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63310[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_63310[(1)] = (1));

return statearr_63310;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_63291){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_63291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63311){if((e63311 instanceof Object)){
var ex__28092__auto__ = e63311;
var statearr_63312_63329 = state_63291;
(statearr_63312_63329[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63330 = state_63291;
state_63291 = G__63330;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_63291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_63291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___63318,out))
})();
var state__28203__auto__ = (function (){var statearr_63313 = f__28202__auto__.call(null);
(statearr_63313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___63318);

return statearr_63313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___63318,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async63338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63338 = (function (map_LT_,f,ch,meta63339){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta63339 = meta63339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63340,meta63339__$1){
var self__ = this;
var _63340__$1 = this;
return (new cljs.core.async.t_cljs$core$async63338(self__.map_LT_,self__.f,self__.ch,meta63339__$1));
});

cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63340){
var self__ = this;
var _63340__$1 = this;
return self__.meta63339;
});

cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async63341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63341 = (function (map_LT_,f,ch,meta63339,_,fn1,meta63342){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta63339 = meta63339;
this._ = _;
this.fn1 = fn1;
this.meta63342 = meta63342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_63343,meta63342__$1){
var self__ = this;
var _63343__$1 = this;
return (new cljs.core.async.t_cljs$core$async63341(self__.map_LT_,self__.f,self__.ch,self__.meta63339,self__._,self__.fn1,meta63342__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async63341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_63343){
var self__ = this;
var _63343__$1 = this;
return self__.meta63342;
});})(___$1))
;

cljs.core.async.t_cljs$core$async63341.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async63341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async63341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async63341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__63331_SHARP_){
return f1.call(null,(((p1__63331_SHARP_ == null))?null:self__.f.call(null,p1__63331_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async63341.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63339","meta63339",-2091199321,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63338","cljs.core.async/t_cljs$core$async63338",-2028711149,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63342","meta63342",2100109056,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async63341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63341";

cljs.core.async.t_cljs$core$async63341.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async63341");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async63341 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63341(map_LT___$1,f__$1,ch__$1,meta63339__$1,___$2,fn1__$1,meta63342){
return (new cljs.core.async.t_cljs$core$async63341(map_LT___$1,f__$1,ch__$1,meta63339__$1,___$2,fn1__$1,meta63342));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async63341(self__.map_LT_,self__.f,self__.ch,self__.meta63339,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async63338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async63338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63339","meta63339",-2091199321,null)], null);
});

cljs.core.async.t_cljs$core$async63338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63338";

cljs.core.async.t_cljs$core$async63338.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async63338");
});

cljs.core.async.__GT_t_cljs$core$async63338 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63338(map_LT___$1,f__$1,ch__$1,meta63339){
return (new cljs.core.async.t_cljs$core$async63338(map_LT___$1,f__$1,ch__$1,meta63339));
});

}

return (new cljs.core.async.t_cljs$core$async63338(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async63347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63347 = (function (map_GT_,f,ch,meta63348){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta63348 = meta63348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63349,meta63348__$1){
var self__ = this;
var _63349__$1 = this;
return (new cljs.core.async.t_cljs$core$async63347(self__.map_GT_,self__.f,self__.ch,meta63348__$1));
});

cljs.core.async.t_cljs$core$async63347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63349){
var self__ = this;
var _63349__$1 = this;
return self__.meta63348;
});

cljs.core.async.t_cljs$core$async63347.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async63347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63347.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async63347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async63347.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async63347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async63347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63348","meta63348",1360852597,null)], null);
});

cljs.core.async.t_cljs$core$async63347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63347";

cljs.core.async.t_cljs$core$async63347.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async63347");
});

cljs.core.async.__GT_t_cljs$core$async63347 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63347(map_GT___$1,f__$1,ch__$1,meta63348){
return (new cljs.core.async.t_cljs$core$async63347(map_GT___$1,f__$1,ch__$1,meta63348));
});

}

return (new cljs.core.async.t_cljs$core$async63347(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async63353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63353 = (function (filter_GT_,p,ch,meta63354){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta63354 = meta63354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63355,meta63354__$1){
var self__ = this;
var _63355__$1 = this;
return (new cljs.core.async.t_cljs$core$async63353(self__.filter_GT_,self__.p,self__.ch,meta63354__$1));
});

cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63355){
var self__ = this;
var _63355__$1 = this;
return self__.meta63354;
});

cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async63353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async63353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63354","meta63354",645405388,null)], null);
});

cljs.core.async.t_cljs$core$async63353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63353";

cljs.core.async.t_cljs$core$async63353.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async63353");
});

cljs.core.async.__GT_t_cljs$core$async63353 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63353(filter_GT___$1,p__$1,ch__$1,meta63354){
return (new cljs.core.async.t_cljs$core$async63353(filter_GT___$1,p__$1,ch__$1,meta63354));
});

}

return (new cljs.core.async.t_cljs$core$async63353(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args63356 = [];
var len__27054__auto___63400 = arguments.length;
var i__27055__auto___63401 = (0);
while(true){
if((i__27055__auto___63401 < len__27054__auto___63400)){
args63356.push((arguments[i__27055__auto___63401]));

var G__63402 = (i__27055__auto___63401 + (1));
i__27055__auto___63401 = G__63402;
continue;
} else {
}
break;
}

var G__63358 = args63356.length;
switch (G__63358) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63356.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28201__auto___63404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___63404,out){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___63404,out){
return (function (state_63379){
var state_val_63380 = (state_63379[(1)]);
if((state_val_63380 === (7))){
var inst_63375 = (state_63379[(2)]);
var state_63379__$1 = state_63379;
var statearr_63381_63405 = state_63379__$1;
(statearr_63381_63405[(2)] = inst_63375);

(statearr_63381_63405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (1))){
var state_63379__$1 = state_63379;
var statearr_63382_63406 = state_63379__$1;
(statearr_63382_63406[(2)] = null);

(statearr_63382_63406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (4))){
var inst_63361 = (state_63379[(7)]);
var inst_63361__$1 = (state_63379[(2)]);
var inst_63362 = (inst_63361__$1 == null);
var state_63379__$1 = (function (){var statearr_63383 = state_63379;
(statearr_63383[(7)] = inst_63361__$1);

return statearr_63383;
})();
if(cljs.core.truth_(inst_63362)){
var statearr_63384_63407 = state_63379__$1;
(statearr_63384_63407[(1)] = (5));

} else {
var statearr_63385_63408 = state_63379__$1;
(statearr_63385_63408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (6))){
var inst_63361 = (state_63379[(7)]);
var inst_63366 = p.call(null,inst_63361);
var state_63379__$1 = state_63379;
if(cljs.core.truth_(inst_63366)){
var statearr_63386_63409 = state_63379__$1;
(statearr_63386_63409[(1)] = (8));

} else {
var statearr_63387_63410 = state_63379__$1;
(statearr_63387_63410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (3))){
var inst_63377 = (state_63379[(2)]);
var state_63379__$1 = state_63379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63379__$1,inst_63377);
} else {
if((state_val_63380 === (2))){
var state_63379__$1 = state_63379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63379__$1,(4),ch);
} else {
if((state_val_63380 === (11))){
var inst_63369 = (state_63379[(2)]);
var state_63379__$1 = state_63379;
var statearr_63388_63411 = state_63379__$1;
(statearr_63388_63411[(2)] = inst_63369);

(statearr_63388_63411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (9))){
var state_63379__$1 = state_63379;
var statearr_63389_63412 = state_63379__$1;
(statearr_63389_63412[(2)] = null);

(statearr_63389_63412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (5))){
var inst_63364 = cljs.core.async.close_BANG_.call(null,out);
var state_63379__$1 = state_63379;
var statearr_63390_63413 = state_63379__$1;
(statearr_63390_63413[(2)] = inst_63364);

(statearr_63390_63413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (10))){
var inst_63372 = (state_63379[(2)]);
var state_63379__$1 = (function (){var statearr_63391 = state_63379;
(statearr_63391[(8)] = inst_63372);

return statearr_63391;
})();
var statearr_63392_63414 = state_63379__$1;
(statearr_63392_63414[(2)] = null);

(statearr_63392_63414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63380 === (8))){
var inst_63361 = (state_63379[(7)]);
var state_63379__$1 = state_63379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63379__$1,(11),out,inst_63361);
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
});})(c__28201__auto___63404,out))
;
return ((function (switch__28088__auto__,c__28201__auto___63404,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_63396 = [null,null,null,null,null,null,null,null,null];
(statearr_63396[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_63396[(1)] = (1));

return statearr_63396;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_63379){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_63379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63397){if((e63397 instanceof Object)){
var ex__28092__auto__ = e63397;
var statearr_63398_63415 = state_63379;
(statearr_63398_63415[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63416 = state_63379;
state_63379 = G__63416;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_63379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_63379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___63404,out))
})();
var state__28203__auto__ = (function (){var statearr_63399 = f__28202__auto__.call(null);
(statearr_63399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___63404);

return statearr_63399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___63404,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args63417 = [];
var len__27054__auto___63420 = arguments.length;
var i__27055__auto___63421 = (0);
while(true){
if((i__27055__auto___63421 < len__27054__auto___63420)){
args63417.push((arguments[i__27055__auto___63421]));

var G__63422 = (i__27055__auto___63421 + (1));
i__27055__auto___63421 = G__63422;
continue;
} else {
}
break;
}

var G__63419 = args63417.length;
switch (G__63419) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63417.length)].join('')));

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
var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__){
return (function (state_63589){
var state_val_63590 = (state_63589[(1)]);
if((state_val_63590 === (7))){
var inst_63585 = (state_63589[(2)]);
var state_63589__$1 = state_63589;
var statearr_63591_63632 = state_63589__$1;
(statearr_63591_63632[(2)] = inst_63585);

(statearr_63591_63632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (20))){
var inst_63555 = (state_63589[(7)]);
var inst_63566 = (state_63589[(2)]);
var inst_63567 = cljs.core.next.call(null,inst_63555);
var inst_63541 = inst_63567;
var inst_63542 = null;
var inst_63543 = (0);
var inst_63544 = (0);
var state_63589__$1 = (function (){var statearr_63592 = state_63589;
(statearr_63592[(8)] = inst_63543);

(statearr_63592[(9)] = inst_63566);

(statearr_63592[(10)] = inst_63541);

(statearr_63592[(11)] = inst_63544);

(statearr_63592[(12)] = inst_63542);

return statearr_63592;
})();
var statearr_63593_63633 = state_63589__$1;
(statearr_63593_63633[(2)] = null);

(statearr_63593_63633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (1))){
var state_63589__$1 = state_63589;
var statearr_63594_63634 = state_63589__$1;
(statearr_63594_63634[(2)] = null);

(statearr_63594_63634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (4))){
var inst_63530 = (state_63589[(13)]);
var inst_63530__$1 = (state_63589[(2)]);
var inst_63531 = (inst_63530__$1 == null);
var state_63589__$1 = (function (){var statearr_63595 = state_63589;
(statearr_63595[(13)] = inst_63530__$1);

return statearr_63595;
})();
if(cljs.core.truth_(inst_63531)){
var statearr_63596_63635 = state_63589__$1;
(statearr_63596_63635[(1)] = (5));

} else {
var statearr_63597_63636 = state_63589__$1;
(statearr_63597_63636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (15))){
var state_63589__$1 = state_63589;
var statearr_63601_63637 = state_63589__$1;
(statearr_63601_63637[(2)] = null);

(statearr_63601_63637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (21))){
var state_63589__$1 = state_63589;
var statearr_63602_63638 = state_63589__$1;
(statearr_63602_63638[(2)] = null);

(statearr_63602_63638[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (13))){
var inst_63543 = (state_63589[(8)]);
var inst_63541 = (state_63589[(10)]);
var inst_63544 = (state_63589[(11)]);
var inst_63542 = (state_63589[(12)]);
var inst_63551 = (state_63589[(2)]);
var inst_63552 = (inst_63544 + (1));
var tmp63598 = inst_63543;
var tmp63599 = inst_63541;
var tmp63600 = inst_63542;
var inst_63541__$1 = tmp63599;
var inst_63542__$1 = tmp63600;
var inst_63543__$1 = tmp63598;
var inst_63544__$1 = inst_63552;
var state_63589__$1 = (function (){var statearr_63603 = state_63589;
(statearr_63603[(8)] = inst_63543__$1);

(statearr_63603[(10)] = inst_63541__$1);

(statearr_63603[(11)] = inst_63544__$1);

(statearr_63603[(12)] = inst_63542__$1);

(statearr_63603[(14)] = inst_63551);

return statearr_63603;
})();
var statearr_63604_63639 = state_63589__$1;
(statearr_63604_63639[(2)] = null);

(statearr_63604_63639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (22))){
var state_63589__$1 = state_63589;
var statearr_63605_63640 = state_63589__$1;
(statearr_63605_63640[(2)] = null);

(statearr_63605_63640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (6))){
var inst_63530 = (state_63589[(13)]);
var inst_63539 = f.call(null,inst_63530);
var inst_63540 = cljs.core.seq.call(null,inst_63539);
var inst_63541 = inst_63540;
var inst_63542 = null;
var inst_63543 = (0);
var inst_63544 = (0);
var state_63589__$1 = (function (){var statearr_63606 = state_63589;
(statearr_63606[(8)] = inst_63543);

(statearr_63606[(10)] = inst_63541);

(statearr_63606[(11)] = inst_63544);

(statearr_63606[(12)] = inst_63542);

return statearr_63606;
})();
var statearr_63607_63641 = state_63589__$1;
(statearr_63607_63641[(2)] = null);

(statearr_63607_63641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (17))){
var inst_63555 = (state_63589[(7)]);
var inst_63559 = cljs.core.chunk_first.call(null,inst_63555);
var inst_63560 = cljs.core.chunk_rest.call(null,inst_63555);
var inst_63561 = cljs.core.count.call(null,inst_63559);
var inst_63541 = inst_63560;
var inst_63542 = inst_63559;
var inst_63543 = inst_63561;
var inst_63544 = (0);
var state_63589__$1 = (function (){var statearr_63608 = state_63589;
(statearr_63608[(8)] = inst_63543);

(statearr_63608[(10)] = inst_63541);

(statearr_63608[(11)] = inst_63544);

(statearr_63608[(12)] = inst_63542);

return statearr_63608;
})();
var statearr_63609_63642 = state_63589__$1;
(statearr_63609_63642[(2)] = null);

(statearr_63609_63642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (3))){
var inst_63587 = (state_63589[(2)]);
var state_63589__$1 = state_63589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63589__$1,inst_63587);
} else {
if((state_val_63590 === (12))){
var inst_63575 = (state_63589[(2)]);
var state_63589__$1 = state_63589;
var statearr_63610_63643 = state_63589__$1;
(statearr_63610_63643[(2)] = inst_63575);

(statearr_63610_63643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (2))){
var state_63589__$1 = state_63589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63589__$1,(4),in$);
} else {
if((state_val_63590 === (23))){
var inst_63583 = (state_63589[(2)]);
var state_63589__$1 = state_63589;
var statearr_63611_63644 = state_63589__$1;
(statearr_63611_63644[(2)] = inst_63583);

(statearr_63611_63644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (19))){
var inst_63570 = (state_63589[(2)]);
var state_63589__$1 = state_63589;
var statearr_63612_63645 = state_63589__$1;
(statearr_63612_63645[(2)] = inst_63570);

(statearr_63612_63645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (11))){
var inst_63541 = (state_63589[(10)]);
var inst_63555 = (state_63589[(7)]);
var inst_63555__$1 = cljs.core.seq.call(null,inst_63541);
var state_63589__$1 = (function (){var statearr_63613 = state_63589;
(statearr_63613[(7)] = inst_63555__$1);

return statearr_63613;
})();
if(inst_63555__$1){
var statearr_63614_63646 = state_63589__$1;
(statearr_63614_63646[(1)] = (14));

} else {
var statearr_63615_63647 = state_63589__$1;
(statearr_63615_63647[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (9))){
var inst_63577 = (state_63589[(2)]);
var inst_63578 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_63589__$1 = (function (){var statearr_63616 = state_63589;
(statearr_63616[(15)] = inst_63577);

return statearr_63616;
})();
if(cljs.core.truth_(inst_63578)){
var statearr_63617_63648 = state_63589__$1;
(statearr_63617_63648[(1)] = (21));

} else {
var statearr_63618_63649 = state_63589__$1;
(statearr_63618_63649[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (5))){
var inst_63533 = cljs.core.async.close_BANG_.call(null,out);
var state_63589__$1 = state_63589;
var statearr_63619_63650 = state_63589__$1;
(statearr_63619_63650[(2)] = inst_63533);

(statearr_63619_63650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (14))){
var inst_63555 = (state_63589[(7)]);
var inst_63557 = cljs.core.chunked_seq_QMARK_.call(null,inst_63555);
var state_63589__$1 = state_63589;
if(inst_63557){
var statearr_63620_63651 = state_63589__$1;
(statearr_63620_63651[(1)] = (17));

} else {
var statearr_63621_63652 = state_63589__$1;
(statearr_63621_63652[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (16))){
var inst_63573 = (state_63589[(2)]);
var state_63589__$1 = state_63589;
var statearr_63622_63653 = state_63589__$1;
(statearr_63622_63653[(2)] = inst_63573);

(statearr_63622_63653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63590 === (10))){
var inst_63544 = (state_63589[(11)]);
var inst_63542 = (state_63589[(12)]);
var inst_63549 = cljs.core._nth.call(null,inst_63542,inst_63544);
var state_63589__$1 = state_63589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63589__$1,(13),out,inst_63549);
} else {
if((state_val_63590 === (18))){
var inst_63555 = (state_63589[(7)]);
var inst_63564 = cljs.core.first.call(null,inst_63555);
var state_63589__$1 = state_63589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63589__$1,(20),out,inst_63564);
} else {
if((state_val_63590 === (8))){
var inst_63543 = (state_63589[(8)]);
var inst_63544 = (state_63589[(11)]);
var inst_63546 = (inst_63544 < inst_63543);
var inst_63547 = inst_63546;
var state_63589__$1 = state_63589;
if(cljs.core.truth_(inst_63547)){
var statearr_63623_63654 = state_63589__$1;
(statearr_63623_63654[(1)] = (10));

} else {
var statearr_63624_63655 = state_63589__$1;
(statearr_63624_63655[(1)] = (11));

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
});})(c__28201__auto__))
;
return ((function (switch__28088__auto__,c__28201__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____0 = (function (){
var statearr_63628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63628[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__);

(statearr_63628[(1)] = (1));

return statearr_63628;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____1 = (function (state_63589){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_63589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63629){if((e63629 instanceof Object)){
var ex__28092__auto__ = e63629;
var statearr_63630_63656 = state_63589;
(statearr_63630_63656[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63657 = state_63589;
state_63589 = G__63657;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__ = function(state_63589){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____1.call(this,state_63589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28089__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__))
})();
var state__28203__auto__ = (function (){var statearr_63631 = f__28202__auto__.call(null);
(statearr_63631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_63631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__))
);

return c__28201__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args63658 = [];
var len__27054__auto___63661 = arguments.length;
var i__27055__auto___63662 = (0);
while(true){
if((i__27055__auto___63662 < len__27054__auto___63661)){
args63658.push((arguments[i__27055__auto___63662]));

var G__63663 = (i__27055__auto___63662 + (1));
i__27055__auto___63662 = G__63663;
continue;
} else {
}
break;
}

var G__63660 = args63658.length;
switch (G__63660) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63658.length)].join('')));

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
var args63665 = [];
var len__27054__auto___63668 = arguments.length;
var i__27055__auto___63669 = (0);
while(true){
if((i__27055__auto___63669 < len__27054__auto___63668)){
args63665.push((arguments[i__27055__auto___63669]));

var G__63670 = (i__27055__auto___63669 + (1));
i__27055__auto___63669 = G__63670;
continue;
} else {
}
break;
}

var G__63667 = args63665.length;
switch (G__63667) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63665.length)].join('')));

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
var args63672 = [];
var len__27054__auto___63723 = arguments.length;
var i__27055__auto___63724 = (0);
while(true){
if((i__27055__auto___63724 < len__27054__auto___63723)){
args63672.push((arguments[i__27055__auto___63724]));

var G__63725 = (i__27055__auto___63724 + (1));
i__27055__auto___63724 = G__63725;
continue;
} else {
}
break;
}

var G__63674 = args63672.length;
switch (G__63674) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63672.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28201__auto___63727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___63727,out){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___63727,out){
return (function (state_63698){
var state_val_63699 = (state_63698[(1)]);
if((state_val_63699 === (7))){
var inst_63693 = (state_63698[(2)]);
var state_63698__$1 = state_63698;
var statearr_63700_63728 = state_63698__$1;
(statearr_63700_63728[(2)] = inst_63693);

(statearr_63700_63728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (1))){
var inst_63675 = null;
var state_63698__$1 = (function (){var statearr_63701 = state_63698;
(statearr_63701[(7)] = inst_63675);

return statearr_63701;
})();
var statearr_63702_63729 = state_63698__$1;
(statearr_63702_63729[(2)] = null);

(statearr_63702_63729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (4))){
var inst_63678 = (state_63698[(8)]);
var inst_63678__$1 = (state_63698[(2)]);
var inst_63679 = (inst_63678__$1 == null);
var inst_63680 = cljs.core.not.call(null,inst_63679);
var state_63698__$1 = (function (){var statearr_63703 = state_63698;
(statearr_63703[(8)] = inst_63678__$1);

return statearr_63703;
})();
if(inst_63680){
var statearr_63704_63730 = state_63698__$1;
(statearr_63704_63730[(1)] = (5));

} else {
var statearr_63705_63731 = state_63698__$1;
(statearr_63705_63731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (6))){
var state_63698__$1 = state_63698;
var statearr_63706_63732 = state_63698__$1;
(statearr_63706_63732[(2)] = null);

(statearr_63706_63732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (3))){
var inst_63695 = (state_63698[(2)]);
var inst_63696 = cljs.core.async.close_BANG_.call(null,out);
var state_63698__$1 = (function (){var statearr_63707 = state_63698;
(statearr_63707[(9)] = inst_63695);

return statearr_63707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63698__$1,inst_63696);
} else {
if((state_val_63699 === (2))){
var state_63698__$1 = state_63698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63698__$1,(4),ch);
} else {
if((state_val_63699 === (11))){
var inst_63678 = (state_63698[(8)]);
var inst_63687 = (state_63698[(2)]);
var inst_63675 = inst_63678;
var state_63698__$1 = (function (){var statearr_63708 = state_63698;
(statearr_63708[(10)] = inst_63687);

(statearr_63708[(7)] = inst_63675);

return statearr_63708;
})();
var statearr_63709_63733 = state_63698__$1;
(statearr_63709_63733[(2)] = null);

(statearr_63709_63733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (9))){
var inst_63678 = (state_63698[(8)]);
var state_63698__$1 = state_63698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63698__$1,(11),out,inst_63678);
} else {
if((state_val_63699 === (5))){
var inst_63678 = (state_63698[(8)]);
var inst_63675 = (state_63698[(7)]);
var inst_63682 = cljs.core._EQ_.call(null,inst_63678,inst_63675);
var state_63698__$1 = state_63698;
if(inst_63682){
var statearr_63711_63734 = state_63698__$1;
(statearr_63711_63734[(1)] = (8));

} else {
var statearr_63712_63735 = state_63698__$1;
(statearr_63712_63735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (10))){
var inst_63690 = (state_63698[(2)]);
var state_63698__$1 = state_63698;
var statearr_63713_63736 = state_63698__$1;
(statearr_63713_63736[(2)] = inst_63690);

(statearr_63713_63736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (8))){
var inst_63675 = (state_63698[(7)]);
var tmp63710 = inst_63675;
var inst_63675__$1 = tmp63710;
var state_63698__$1 = (function (){var statearr_63714 = state_63698;
(statearr_63714[(7)] = inst_63675__$1);

return statearr_63714;
})();
var statearr_63715_63737 = state_63698__$1;
(statearr_63715_63737[(2)] = null);

(statearr_63715_63737[(1)] = (2));


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
});})(c__28201__auto___63727,out))
;
return ((function (switch__28088__auto__,c__28201__auto___63727,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_63719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63719[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_63719[(1)] = (1));

return statearr_63719;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_63698){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_63698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63720){if((e63720 instanceof Object)){
var ex__28092__auto__ = e63720;
var statearr_63721_63738 = state_63698;
(statearr_63721_63738[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63739 = state_63698;
state_63698 = G__63739;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_63698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_63698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___63727,out))
})();
var state__28203__auto__ = (function (){var statearr_63722 = f__28202__auto__.call(null);
(statearr_63722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___63727);

return statearr_63722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___63727,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args63740 = [];
var len__27054__auto___63810 = arguments.length;
var i__27055__auto___63811 = (0);
while(true){
if((i__27055__auto___63811 < len__27054__auto___63810)){
args63740.push((arguments[i__27055__auto___63811]));

var G__63812 = (i__27055__auto___63811 + (1));
i__27055__auto___63811 = G__63812;
continue;
} else {
}
break;
}

var G__63742 = args63740.length;
switch (G__63742) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63740.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28201__auto___63814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___63814,out){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___63814,out){
return (function (state_63780){
var state_val_63781 = (state_63780[(1)]);
if((state_val_63781 === (7))){
var inst_63776 = (state_63780[(2)]);
var state_63780__$1 = state_63780;
var statearr_63782_63815 = state_63780__$1;
(statearr_63782_63815[(2)] = inst_63776);

(statearr_63782_63815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (1))){
var inst_63743 = (new Array(n));
var inst_63744 = inst_63743;
var inst_63745 = (0);
var state_63780__$1 = (function (){var statearr_63783 = state_63780;
(statearr_63783[(7)] = inst_63744);

(statearr_63783[(8)] = inst_63745);

return statearr_63783;
})();
var statearr_63784_63816 = state_63780__$1;
(statearr_63784_63816[(2)] = null);

(statearr_63784_63816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (4))){
var inst_63748 = (state_63780[(9)]);
var inst_63748__$1 = (state_63780[(2)]);
var inst_63749 = (inst_63748__$1 == null);
var inst_63750 = cljs.core.not.call(null,inst_63749);
var state_63780__$1 = (function (){var statearr_63785 = state_63780;
(statearr_63785[(9)] = inst_63748__$1);

return statearr_63785;
})();
if(inst_63750){
var statearr_63786_63817 = state_63780__$1;
(statearr_63786_63817[(1)] = (5));

} else {
var statearr_63787_63818 = state_63780__$1;
(statearr_63787_63818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (15))){
var inst_63770 = (state_63780[(2)]);
var state_63780__$1 = state_63780;
var statearr_63788_63819 = state_63780__$1;
(statearr_63788_63819[(2)] = inst_63770);

(statearr_63788_63819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (13))){
var state_63780__$1 = state_63780;
var statearr_63789_63820 = state_63780__$1;
(statearr_63789_63820[(2)] = null);

(statearr_63789_63820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (6))){
var inst_63745 = (state_63780[(8)]);
var inst_63766 = (inst_63745 > (0));
var state_63780__$1 = state_63780;
if(cljs.core.truth_(inst_63766)){
var statearr_63790_63821 = state_63780__$1;
(statearr_63790_63821[(1)] = (12));

} else {
var statearr_63791_63822 = state_63780__$1;
(statearr_63791_63822[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (3))){
var inst_63778 = (state_63780[(2)]);
var state_63780__$1 = state_63780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63780__$1,inst_63778);
} else {
if((state_val_63781 === (12))){
var inst_63744 = (state_63780[(7)]);
var inst_63768 = cljs.core.vec.call(null,inst_63744);
var state_63780__$1 = state_63780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63780__$1,(15),out,inst_63768);
} else {
if((state_val_63781 === (2))){
var state_63780__$1 = state_63780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63780__$1,(4),ch);
} else {
if((state_val_63781 === (11))){
var inst_63760 = (state_63780[(2)]);
var inst_63761 = (new Array(n));
var inst_63744 = inst_63761;
var inst_63745 = (0);
var state_63780__$1 = (function (){var statearr_63792 = state_63780;
(statearr_63792[(7)] = inst_63744);

(statearr_63792[(8)] = inst_63745);

(statearr_63792[(10)] = inst_63760);

return statearr_63792;
})();
var statearr_63793_63823 = state_63780__$1;
(statearr_63793_63823[(2)] = null);

(statearr_63793_63823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (9))){
var inst_63744 = (state_63780[(7)]);
var inst_63758 = cljs.core.vec.call(null,inst_63744);
var state_63780__$1 = state_63780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63780__$1,(11),out,inst_63758);
} else {
if((state_val_63781 === (5))){
var inst_63748 = (state_63780[(9)]);
var inst_63744 = (state_63780[(7)]);
var inst_63745 = (state_63780[(8)]);
var inst_63753 = (state_63780[(11)]);
var inst_63752 = (inst_63744[inst_63745] = inst_63748);
var inst_63753__$1 = (inst_63745 + (1));
var inst_63754 = (inst_63753__$1 < n);
var state_63780__$1 = (function (){var statearr_63794 = state_63780;
(statearr_63794[(12)] = inst_63752);

(statearr_63794[(11)] = inst_63753__$1);

return statearr_63794;
})();
if(cljs.core.truth_(inst_63754)){
var statearr_63795_63824 = state_63780__$1;
(statearr_63795_63824[(1)] = (8));

} else {
var statearr_63796_63825 = state_63780__$1;
(statearr_63796_63825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (14))){
var inst_63773 = (state_63780[(2)]);
var inst_63774 = cljs.core.async.close_BANG_.call(null,out);
var state_63780__$1 = (function (){var statearr_63798 = state_63780;
(statearr_63798[(13)] = inst_63773);

return statearr_63798;
})();
var statearr_63799_63826 = state_63780__$1;
(statearr_63799_63826[(2)] = inst_63774);

(statearr_63799_63826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (10))){
var inst_63764 = (state_63780[(2)]);
var state_63780__$1 = state_63780;
var statearr_63800_63827 = state_63780__$1;
(statearr_63800_63827[(2)] = inst_63764);

(statearr_63800_63827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63781 === (8))){
var inst_63744 = (state_63780[(7)]);
var inst_63753 = (state_63780[(11)]);
var tmp63797 = inst_63744;
var inst_63744__$1 = tmp63797;
var inst_63745 = inst_63753;
var state_63780__$1 = (function (){var statearr_63801 = state_63780;
(statearr_63801[(7)] = inst_63744__$1);

(statearr_63801[(8)] = inst_63745);

return statearr_63801;
})();
var statearr_63802_63828 = state_63780__$1;
(statearr_63802_63828[(2)] = null);

(statearr_63802_63828[(1)] = (2));


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
});})(c__28201__auto___63814,out))
;
return ((function (switch__28088__auto__,c__28201__auto___63814,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_63806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63806[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_63806[(1)] = (1));

return statearr_63806;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_63780){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_63780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63807){if((e63807 instanceof Object)){
var ex__28092__auto__ = e63807;
var statearr_63808_63829 = state_63780;
(statearr_63808_63829[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63830 = state_63780;
state_63780 = G__63830;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_63780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_63780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___63814,out))
})();
var state__28203__auto__ = (function (){var statearr_63809 = f__28202__auto__.call(null);
(statearr_63809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___63814);

return statearr_63809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___63814,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args63831 = [];
var len__27054__auto___63905 = arguments.length;
var i__27055__auto___63906 = (0);
while(true){
if((i__27055__auto___63906 < len__27054__auto___63905)){
args63831.push((arguments[i__27055__auto___63906]));

var G__63907 = (i__27055__auto___63906 + (1));
i__27055__auto___63906 = G__63907;
continue;
} else {
}
break;
}

var G__63833 = args63831.length;
switch (G__63833) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63831.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28201__auto___63909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___63909,out){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___63909,out){
return (function (state_63875){
var state_val_63876 = (state_63875[(1)]);
if((state_val_63876 === (7))){
var inst_63871 = (state_63875[(2)]);
var state_63875__$1 = state_63875;
var statearr_63877_63910 = state_63875__$1;
(statearr_63877_63910[(2)] = inst_63871);

(statearr_63877_63910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (1))){
var inst_63834 = [];
var inst_63835 = inst_63834;
var inst_63836 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63875__$1 = (function (){var statearr_63878 = state_63875;
(statearr_63878[(7)] = inst_63836);

(statearr_63878[(8)] = inst_63835);

return statearr_63878;
})();
var statearr_63879_63911 = state_63875__$1;
(statearr_63879_63911[(2)] = null);

(statearr_63879_63911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (4))){
var inst_63839 = (state_63875[(9)]);
var inst_63839__$1 = (state_63875[(2)]);
var inst_63840 = (inst_63839__$1 == null);
var inst_63841 = cljs.core.not.call(null,inst_63840);
var state_63875__$1 = (function (){var statearr_63880 = state_63875;
(statearr_63880[(9)] = inst_63839__$1);

return statearr_63880;
})();
if(inst_63841){
var statearr_63881_63912 = state_63875__$1;
(statearr_63881_63912[(1)] = (5));

} else {
var statearr_63882_63913 = state_63875__$1;
(statearr_63882_63913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (15))){
var inst_63865 = (state_63875[(2)]);
var state_63875__$1 = state_63875;
var statearr_63883_63914 = state_63875__$1;
(statearr_63883_63914[(2)] = inst_63865);

(statearr_63883_63914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (13))){
var state_63875__$1 = state_63875;
var statearr_63884_63915 = state_63875__$1;
(statearr_63884_63915[(2)] = null);

(statearr_63884_63915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (6))){
var inst_63835 = (state_63875[(8)]);
var inst_63860 = inst_63835.length;
var inst_63861 = (inst_63860 > (0));
var state_63875__$1 = state_63875;
if(cljs.core.truth_(inst_63861)){
var statearr_63885_63916 = state_63875__$1;
(statearr_63885_63916[(1)] = (12));

} else {
var statearr_63886_63917 = state_63875__$1;
(statearr_63886_63917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (3))){
var inst_63873 = (state_63875[(2)]);
var state_63875__$1 = state_63875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63875__$1,inst_63873);
} else {
if((state_val_63876 === (12))){
var inst_63835 = (state_63875[(8)]);
var inst_63863 = cljs.core.vec.call(null,inst_63835);
var state_63875__$1 = state_63875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63875__$1,(15),out,inst_63863);
} else {
if((state_val_63876 === (2))){
var state_63875__$1 = state_63875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63875__$1,(4),ch);
} else {
if((state_val_63876 === (11))){
var inst_63843 = (state_63875[(10)]);
var inst_63839 = (state_63875[(9)]);
var inst_63853 = (state_63875[(2)]);
var inst_63854 = [];
var inst_63855 = inst_63854.push(inst_63839);
var inst_63835 = inst_63854;
var inst_63836 = inst_63843;
var state_63875__$1 = (function (){var statearr_63887 = state_63875;
(statearr_63887[(7)] = inst_63836);

(statearr_63887[(11)] = inst_63855);

(statearr_63887[(12)] = inst_63853);

(statearr_63887[(8)] = inst_63835);

return statearr_63887;
})();
var statearr_63888_63918 = state_63875__$1;
(statearr_63888_63918[(2)] = null);

(statearr_63888_63918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (9))){
var inst_63835 = (state_63875[(8)]);
var inst_63851 = cljs.core.vec.call(null,inst_63835);
var state_63875__$1 = state_63875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63875__$1,(11),out,inst_63851);
} else {
if((state_val_63876 === (5))){
var inst_63836 = (state_63875[(7)]);
var inst_63843 = (state_63875[(10)]);
var inst_63839 = (state_63875[(9)]);
var inst_63843__$1 = f.call(null,inst_63839);
var inst_63844 = cljs.core._EQ_.call(null,inst_63843__$1,inst_63836);
var inst_63845 = cljs.core.keyword_identical_QMARK_.call(null,inst_63836,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_63846 = (inst_63844) || (inst_63845);
var state_63875__$1 = (function (){var statearr_63889 = state_63875;
(statearr_63889[(10)] = inst_63843__$1);

return statearr_63889;
})();
if(cljs.core.truth_(inst_63846)){
var statearr_63890_63919 = state_63875__$1;
(statearr_63890_63919[(1)] = (8));

} else {
var statearr_63891_63920 = state_63875__$1;
(statearr_63891_63920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (14))){
var inst_63868 = (state_63875[(2)]);
var inst_63869 = cljs.core.async.close_BANG_.call(null,out);
var state_63875__$1 = (function (){var statearr_63893 = state_63875;
(statearr_63893[(13)] = inst_63868);

return statearr_63893;
})();
var statearr_63894_63921 = state_63875__$1;
(statearr_63894_63921[(2)] = inst_63869);

(statearr_63894_63921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (10))){
var inst_63858 = (state_63875[(2)]);
var state_63875__$1 = state_63875;
var statearr_63895_63922 = state_63875__$1;
(statearr_63895_63922[(2)] = inst_63858);

(statearr_63895_63922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (8))){
var inst_63843 = (state_63875[(10)]);
var inst_63839 = (state_63875[(9)]);
var inst_63835 = (state_63875[(8)]);
var inst_63848 = inst_63835.push(inst_63839);
var tmp63892 = inst_63835;
var inst_63835__$1 = tmp63892;
var inst_63836 = inst_63843;
var state_63875__$1 = (function (){var statearr_63896 = state_63875;
(statearr_63896[(7)] = inst_63836);

(statearr_63896[(14)] = inst_63848);

(statearr_63896[(8)] = inst_63835__$1);

return statearr_63896;
})();
var statearr_63897_63923 = state_63875__$1;
(statearr_63897_63923[(2)] = null);

(statearr_63897_63923[(1)] = (2));


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
});})(c__28201__auto___63909,out))
;
return ((function (switch__28088__auto__,c__28201__auto___63909,out){
return (function() {
var cljs$core$async$state_machine__28089__auto__ = null;
var cljs$core$async$state_machine__28089__auto____0 = (function (){
var statearr_63901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63901[(0)] = cljs$core$async$state_machine__28089__auto__);

(statearr_63901[(1)] = (1));

return statearr_63901;
});
var cljs$core$async$state_machine__28089__auto____1 = (function (state_63875){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_63875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e63902){if((e63902 instanceof Object)){
var ex__28092__auto__ = e63902;
var statearr_63903_63924 = state_63875;
(statearr_63903_63924[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63925 = state_63875;
state_63875 = G__63925;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
cljs$core$async$state_machine__28089__auto__ = function(state_63875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28089__auto____1.call(this,state_63875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28089__auto____0;
cljs$core$async$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28089__auto____1;
return cljs$core$async$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___63909,out))
})();
var state__28203__auto__ = (function (){var statearr_63904 = f__28202__auto__.call(null);
(statearr_63904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___63909);

return statearr_63904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___63909,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1498707048888