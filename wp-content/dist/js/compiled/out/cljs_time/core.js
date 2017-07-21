// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
cljs_time.core.deprecated = (function cljs_time$core$deprecated(message){
return cljs.core.println.call(null,"DEPRECATION WARNING: ",message);
});
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.year[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.month[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.day[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.hour[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.minute[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.sec[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.second[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.milli[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$,that);
} else {
var m__26653__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$,that);
} else {
var m__26653__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$,that);
} else {
var m__26653__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.plus_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$,period);
} else {
var m__26653__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.minus_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$,period);
} else {
var m__26653__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});

/**
 * Returs the number of weeks in the year
 */
cljs_time.core.week_number_of_year = (function cljs_time$core$week_number_of_year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.week_number_of_year[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.week_number_of_year["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.week-number-of-year",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.in_days[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.in_months[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__26652__auto__ = (((this$ == null))?null:this$);
var m__26653__auto__ = (cljs_time.core.in_years[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,this$);
} else {
var m__26653__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26611__auto__,k__26612__auto__){
var self__ = this;
var this__26611__auto____$1 = this;
return cljs.core._lookup.call(null,this__26611__auto____$1,k__26612__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26613__auto__,k32265,else__26614__auto__){
var self__ = this;
var this__26613__auto____$1 = this;
var G__32267 = (((k32265 instanceof cljs.core.Keyword))?k32265.fqn:null);
switch (G__32267) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32265,else__26614__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26625__auto__,writer__26626__auto__,opts__26627__auto__){
var self__ = this;
var this__26625__auto____$1 = this;
var pr_pair__26628__auto__ = ((function (this__26625__auto____$1){
return (function (keyval__26629__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26626__auto__,cljs.core.pr_writer,""," ","",opts__26627__auto__,keyval__26629__auto__);
});})(this__26625__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26626__auto__,pr_pair__26628__auto__,"#cljs-time.core.Interval{",", ","}",opts__26627__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32264){
var self__ = this;
var G__32264__$1 = this;
return (new cljs.core.RecordIter((0),G__32264__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26609__auto__){
var self__ = this;
var this__26609__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26605__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26615__auto__){
var self__ = this;
var this__26615__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26606__auto__){
var self__ = this;
var this__26606__auto____$1 = this;
var h__26424__auto__ = self__.__hash;
if(!((h__26424__auto__ == null))){
return h__26424__auto__;
} else {
var h__26424__auto____$1 = cljs.core.hash_imap.call(null,this__26606__auto____$1);
self__.__hash = h__26424__auto____$1;

return h__26424__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26607__auto__,other__26608__auto__){
var self__ = this;
var this__26607__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25977__auto__ = other__26608__auto__;
if(cljs.core.truth_(and__25977__auto__)){
var and__25977__auto____$1 = (this__26607__auto____$1.constructor === other__26608__auto__.constructor);
if(and__25977__auto____$1){
return cljs.core.equiv_map.call(null,this__26607__auto____$1,other__26608__auto__);
} else {
return and__25977__auto____$1;
}
} else {
return and__25977__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26620__auto__,k__26621__auto__){
var self__ = this;
var this__26620__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__26621__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26620__auto____$1),self__.__meta),k__26621__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26621__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26618__auto__,k__26619__auto__,G__32264){
var self__ = this;
var this__26618__auto____$1 = this;
var pred__32268 = cljs.core.keyword_identical_QMARK_;
var expr__32269 = k__26619__auto__;
if(cljs.core.truth_(pred__32268.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__32269))){
return (new cljs_time.core.Interval(G__32264,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32268.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__32269))){
return (new cljs_time.core.Interval(self__.start,G__32264,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26619__auto__,G__32264),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26623__auto__){
var self__ = this;
var this__26623__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26610__auto__,G__32264){
var self__ = this;
var this__26610__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__32264,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26616__auto__,entry__26617__auto__){
var self__ = this;
var this__26616__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26617__auto__)){
return cljs.core._assoc.call(null,this__26616__auto____$1,cljs.core._nth.call(null,entry__26617__auto__,(0)),cljs.core._nth.call(null,entry__26617__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26616__auto____$1,entry__26617__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__26645__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__26645__auto__,writer__26646__auto__){
return cljs.core._write.call(null,writer__26646__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__32266){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__32266),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__32266),null,cljs.core.dissoc.call(null,G__32266,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26611__auto__,k__26612__auto__){
var self__ = this;
var this__26611__auto____$1 = this;
return cljs.core._lookup.call(null,this__26611__auto____$1,k__26612__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26613__auto__,k32273,else__26614__auto__){
var self__ = this;
var this__26613__auto____$1 = this;
var G__32275 = (((k32273 instanceof cljs.core.Keyword))?k32273.fqn:null);
switch (G__32275) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32273,else__26614__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26625__auto__,writer__26626__auto__,opts__26627__auto__){
var self__ = this;
var this__26625__auto____$1 = this;
var pr_pair__26628__auto__ = ((function (this__26625__auto____$1){
return (function (keyval__26629__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26626__auto__,cljs.core.pr_writer,""," ","",opts__26627__auto__,keyval__26629__auto__);
});})(this__26625__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26626__auto__,pr_pair__26628__auto__,"#cljs-time.core.Period{",", ","}",opts__26627__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32272){
var self__ = this;
var G__32272__$1 = this;
return (new cljs.core.RecordIter((0),G__32272__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26609__auto__){
var self__ = this;
var this__26609__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26605__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26615__auto__){
var self__ = this;
var this__26615__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26606__auto__){
var self__ = this;
var this__26606__auto____$1 = this;
var h__26424__auto__ = self__.__hash;
if(!((h__26424__auto__ == null))){
return h__26424__auto__;
} else {
var h__26424__auto____$1 = cljs.core.hash_imap.call(null,this__26606__auto____$1);
self__.__hash = h__26424__auto____$1;

return h__26424__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26607__auto__,other__26608__auto__){
var self__ = this;
var this__26607__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25977__auto__ = other__26608__auto__;
if(cljs.core.truth_(and__25977__auto__)){
var and__25977__auto____$1 = (this__26607__auto____$1.constructor === other__26608__auto__.constructor);
if(and__25977__auto____$1){
return cljs.core.equiv_map.call(null,this__26607__auto____$1,other__26608__auto__);
} else {
return and__25977__auto____$1;
}
} else {
return and__25977__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26620__auto__,k__26621__auto__){
var self__ = this;
var this__26620__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__26621__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26620__auto____$1),self__.__meta),k__26621__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26621__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26618__auto__,k__26619__auto__,G__32272){
var self__ = this;
var this__26618__auto____$1 = this;
var pred__32276 = cljs.core.keyword_identical_QMARK_;
var expr__32277 = k__26619__auto__;
if(cljs.core.truth_(pred__32276.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__32277))){
return (new cljs_time.core.Period(G__32272,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32276.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__32277))){
return (new cljs_time.core.Period(self__.years,G__32272,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32276.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__32277))){
return (new cljs_time.core.Period(self__.years,self__.months,G__32272,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32276.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__32277))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__32272,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32276.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__32277))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__32272,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32276.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__32277))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__32272,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32276.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__32277))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__32272,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32276.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__32277))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__32272,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26619__auto__,G__32272),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26623__auto__){
var self__ = this;
var this__26623__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26610__auto__,G__32272){
var self__ = this;
var this__26610__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__32272,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26616__auto__,entry__26617__auto__){
var self__ = this;
var this__26616__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26617__auto__)){
return cljs.core._assoc.call(null,this__26616__auto____$1,cljs.core._nth.call(null,entry__26617__auto__,(0)),cljs.core._nth.call(null,entry__26617__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26616__auto____$1,entry__26617__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__26645__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__26645__auto__,writer__26646__auto__){
return cljs.core._write.call(null,writer__26646__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__32274){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__32274),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__32274),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__32274),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__32274),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__32274),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__32274),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__32274),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__32274),null,cljs.core.dissoc.call(null,G__32274,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args32280 = [];
var len__27064__auto___32286 = arguments.length;
var i__27065__auto___32287 = (0);
while(true){
if((i__27065__auto___32287 < len__27064__auto___32286)){
args32280.push((arguments[i__27065__auto___32287]));

var G__32288 = (i__27065__auto___32287 + (1));
i__27065__auto___32287 = G__32288;
continue;
} else {
}
break;
}

var G__32285 = args32280.length;
switch (G__32285) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27083__auto__ = (new cljs.core.IndexedSeq(args32280.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27083__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq32281){
var G__32282 = cljs.core.first.call(null,seq32281);
var seq32281__$1 = cljs.core.next.call(null,seq32281);
var G__32283 = cljs.core.first.call(null,seq32281__$1);
var seq32281__$2 = cljs.core.next.call(null,seq32281__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__32282,G__32283,seq32281__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

cljs_time.core.period_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(function (date,op,value){
var ms = op.call(null,date.getTime(),value);
var G__32290 = date;
G__32290.setTime(ms);

return G__32290;
}),new cljs.core.Keyword(null,"weeks","weeks",1844596125),(function (date,op,value){
var days = op.call(null,(0),(value * (7)));
var G__32291 = date;
G__32291.add((new goog.date.Interval(goog.date.Interval.DAYS,days)));

return G__32291;
})], null);
cljs_time.core.periods = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),goog.date.Interval.SECONDS,new cljs.core.Keyword(null,"minutes","minutes",1319166394),goog.date.Interval.MINUTES,new cljs.core.Keyword(null,"hours","hours",58380855),goog.date.Interval.HOURS,new cljs.core.Keyword(null,"days","days",-1394072564),goog.date.Interval.DAYS,new cljs.core.Keyword(null,"months","months",-45571637),goog.date.Interval.MONTHS,new cljs.core.Keyword(null,"years","years",-1298579689),goog.date.Interval.YEARS], null);
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
var date_SINGLEQUOTE_ = date.clone();
var __GT_goog_interval = ((function (date_SINGLEQUOTE_){
return (function (op,interval,value){
if(cljs.core.truth_((function (){var and__25977__auto__ = interval;
if(cljs.core.truth_(and__25977__auto__)){
return value;
} else {
return and__25977__auto__;
}
})())){
return (new goog.date.Interval(interval,op.call(null,(0),value)));
} else {
return null;
}
});})(date_SINGLEQUOTE_))
;
var seq__32302_32312 = cljs.core.seq.call(null,p);
var chunk__32303_32313 = null;
var count__32304_32314 = (0);
var i__32305_32315 = (0);
while(true){
if((i__32305_32315 < count__32304_32314)){
var vec__32306_32316 = cljs.core._nth.call(null,chunk__32303_32313,i__32305_32315);
var k_32317 = cljs.core.nth.call(null,vec__32306_32316,(0),null);
var v_32318 = cljs.core.nth.call(null,vec__32306_32316,(1),null);
var temp__4655__auto___32319 = cljs_time.core.periods.call(null,k_32317);
if(cljs.core.truth_(temp__4655__auto___32319)){
var period_32320 = temp__4655__auto___32319;
var temp__4657__auto___32321 = __GT_goog_interval.call(null,operator,period_32320,v_32318);
if(cljs.core.truth_(temp__4657__auto___32321)){
var i_32322 = temp__4657__auto___32321;
date_SINGLEQUOTE_.add(i_32322);
} else {
}
} else {
var temp__4657__auto___32323 = cljs_time.core.period_fns.call(null,k_32317);
if(cljs.core.truth_(temp__4657__auto___32323)){
var f_32324 = temp__4657__auto___32323;
f_32324.call(null,date_SINGLEQUOTE_,operator,v_32318);
} else {
}
}

var G__32325 = seq__32302_32312;
var G__32326 = chunk__32303_32313;
var G__32327 = count__32304_32314;
var G__32328 = (i__32305_32315 + (1));
seq__32302_32312 = G__32325;
chunk__32303_32313 = G__32326;
count__32304_32314 = G__32327;
i__32305_32315 = G__32328;
continue;
} else {
var temp__4657__auto___32329 = cljs.core.seq.call(null,seq__32302_32312);
if(temp__4657__auto___32329){
var seq__32302_32330__$1 = temp__4657__auto___32329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32302_32330__$1)){
var c__26800__auto___32331 = cljs.core.chunk_first.call(null,seq__32302_32330__$1);
var G__32332 = cljs.core.chunk_rest.call(null,seq__32302_32330__$1);
var G__32333 = c__26800__auto___32331;
var G__32334 = cljs.core.count.call(null,c__26800__auto___32331);
var G__32335 = (0);
seq__32302_32312 = G__32332;
chunk__32303_32313 = G__32333;
count__32304_32314 = G__32334;
i__32305_32315 = G__32335;
continue;
} else {
var vec__32309_32336 = cljs.core.first.call(null,seq__32302_32330__$1);
var k_32337 = cljs.core.nth.call(null,vec__32309_32336,(0),null);
var v_32338 = cljs.core.nth.call(null,vec__32309_32336,(1),null);
var temp__4655__auto___32339 = cljs_time.core.periods.call(null,k_32337);
if(cljs.core.truth_(temp__4655__auto___32339)){
var period_32340 = temp__4655__auto___32339;
var temp__4657__auto___32341__$1 = __GT_goog_interval.call(null,operator,period_32340,v_32338);
if(cljs.core.truth_(temp__4657__auto___32341__$1)){
var i_32342 = temp__4657__auto___32341__$1;
date_SINGLEQUOTE_.add(i_32342);
} else {
}
} else {
var temp__4657__auto___32343__$1 = cljs_time.core.period_fns.call(null,k_32337);
if(cljs.core.truth_(temp__4657__auto___32343__$1)){
var f_32344 = temp__4657__auto___32343__$1;
f_32344.call(null,date_SINGLEQUOTE_,operator,v_32338);
} else {
}
}

var G__32345 = cljs.core.next.call(null,seq__32302_32330__$1);
var G__32346 = null;
var G__32347 = (0);
var G__32348 = (0);
seq__32302_32312 = G__32345;
chunk__32303_32313 = G__32346;
count__32304_32314 = G__32347;
i__32305_32315 = G__32348;
continue;
}
} else {
}
}
break;
}

return date_SINGLEQUOTE_;
});
});
cljs_time.core.compare_local_dates = (function cljs_time$core$compare_local_dates(o,other){
var yo = o.getYear();
var yother = other.getYear();
var dayo = o.getDayOfYear();
var dayother = other.getDayOfYear();
if(cljs.core.not_EQ_.call(null,yo,yother)){
return (yo - yother);
} else {
if(cljs.core.not_EQ_.call(null,dayo,dayother)){
return (dayo - dayother);
} else {
return (0);

}
}
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return this$__$1.equals(that);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) > (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) < (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return (new goog.date.UtcDateTime()).getTime();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return ((new goog.date.UtcDateTime()).getTime() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn.call(null);
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__32350 = (new goog.date.UtcDateTime());
G__32350.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__32350;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__32352 = (new goog.date.DateTime());
G__32352.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__32352;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__32354 = datetime__$1;
G__32354.setHours((0));

G__32354.setMinutes((0));

G__32354.setSeconds((0));

G__32354.setMilliseconds((0));

return G__32354;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__32356 = (new goog.date.UtcDateTime());
G__32356.setTime((0));

return G__32356;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args32357 = [];
var len__27064__auto___32360 = arguments.length;
var i__27065__auto___32361 = (0);
while(true){
if((i__27065__auto___32361 < len__27064__auto___32360)){
args32357.push((arguments[i__27065__auto___32361]));

var G__32362 = (i__27065__auto___32361 + (1));
i__27065__auto___32361 = G__32362;
continue;
} else {
}
break;
}

var G__32359 = args32357.length;
switch (G__32359) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32357.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args32364 = [];
var len__27064__auto___32367 = arguments.length;
var i__27065__auto___32368 = (0);
while(true){
if((i__27065__auto___32368 < len__27064__auto___32367)){
args32364.push((arguments[i__27065__auto___32368]));

var G__32369 = (i__27065__auto___32368 + (1));
i__27065__auto___32368 = G__32369;
continue;
} else {
}
break;
}

var G__32366 = args32364.length;
switch (G__32366) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32364.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args32371 = [];
var len__27064__auto___32374 = arguments.length;
var i__27065__auto___32375 = (0);
while(true){
if((i__27065__auto___32375 < len__27064__auto___32374)){
args32371.push((arguments[i__27065__auto___32375]));

var G__32376 = (i__27065__auto___32375 + (1));
i__27065__auto___32375 = G__32376;
continue;
} else {
}
break;
}

var G__32373 = args32371.length;
switch (G__32373) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32371.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new goog.date.Date in the local timezone.
 * Specify the year, month, and day.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new goog.date.Date representing today in the local timezone.
 */
cljs_time.core.today = (function cljs_time$core$today(){
return (new goog.date.Date((new Date(cljs_time.core._STAR_ms_fn_STAR_.call(null)))));
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args32378 = [];
var len__27064__auto___32381 = arguments.length;
var i__27065__auto___32382 = (0);
while(true){
if((i__27065__auto___32382 < len__27064__auto___32381)){
args32378.push((arguments[i__27065__auto___32382]));

var G__32383 = (i__27065__auto___32382 + (1));
i__27065__auto___32382 = G__32383;
continue;
} else {
}
break;
}

var G__32380 = args32378.length;
switch (G__32380) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32378.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__25989__auto__ = minutes;
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__32386 = (new goog.date.DateTime());
G__32386.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__32386;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the Local timezone, returns a UtcDateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the UTC
 *   timezone.
 */
cljs_time.core.to_utc_time_zone = (function cljs_time$core$to_utc_time_zone(dt){
return goog.date.UtcDateTime.fromTimestamp(dt.getTime());
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Assuming `dt` is in the local timezone, returns a UtcDateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the UTC timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_utc_time_zone = (function cljs_time$core$from_utc_time_zone(dt){
var year = dt.getYear();
var month = dt.getMonth();
var date = dt.getDate();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,dt)))){
return (new goog.date.UtcDateTime(year,month,date));
} else {
return (new goog.date.UtcDateTime(year,month,date,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args32387 = [];
var len__27064__auto___32390 = arguments.length;
var i__27065__auto___32391 = (0);
while(true){
if((i__27065__auto___32391 < len__27064__auto___32390)){
args32387.push((arguments[i__27065__auto___32391]));

var G__32392 = (i__27065__auto___32391 + (1));
i__27065__auto___32391 = G__32392;
continue;
} else {
}
break;
}

var G__32389 = args32387.length;
switch (G__32389) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32387.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args32394 = [];
var len__27064__auto___32397 = arguments.length;
var i__27065__auto___32398 = (0);
while(true){
if((i__27065__auto___32398 < len__27064__auto___32397)){
args32394.push((arguments[i__27065__auto___32398]));

var G__32399 = (i__27065__auto___32398 + (1));
i__27065__auto___32398 = G__32399;
continue;
} else {
}
break;
}

var G__32396 = args32394.length;
switch (G__32396) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32394.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args32401 = [];
var len__27064__auto___32404 = arguments.length;
var i__27065__auto___32405 = (0);
while(true){
if((i__27065__auto___32405 < len__27064__auto___32404)){
args32401.push((arguments[i__27065__auto___32405]));

var G__32406 = (i__27065__auto___32405 + (1));
i__27065__auto___32405 = G__32406;
continue;
} else {
}
break;
}

var G__32403 = args32401.length;
switch (G__32403) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32401.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args32408 = [];
var len__27064__auto___32411 = arguments.length;
var i__27065__auto___32412 = (0);
while(true){
if((i__27065__auto___32412 < len__27064__auto___32411)){
args32408.push((arguments[i__27065__auto___32412]));

var G__32413 = (i__27065__auto___32412 + (1));
i__27065__auto___32412 = G__32413;
continue;
} else {
}
break;
}

var G__32410 = args32408.length;
switch (G__32410) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32408.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args32415 = [];
var len__27064__auto___32418 = arguments.length;
var i__27065__auto___32419 = (0);
while(true){
if((i__27065__auto___32419 < len__27064__auto___32418)){
args32415.push((arguments[i__27065__auto___32419]));

var G__32420 = (i__27065__auto___32419 + (1));
i__27065__auto___32419 = G__32420;
continue;
} else {
}
break;
}

var G__32417 = args32415.length;
switch (G__32417) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32415.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args32422 = [];
var len__27064__auto___32425 = arguments.length;
var i__27065__auto___32426 = (0);
while(true){
if((i__27065__auto___32426 < len__27064__auto___32425)){
args32422.push((arguments[i__27065__auto___32426]));

var G__32427 = (i__27065__auto___32426 + (1));
i__27065__auto___32426 = G__32427;
continue;
} else {
}
break;
}

var G__32424 = args32422.length;
switch (G__32424) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32422.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args32429 = [];
var len__27064__auto___32432 = arguments.length;
var i__27065__auto___32433 = (0);
while(true){
if((i__27065__auto___32433 < len__27064__auto___32432)){
args32429.push((arguments[i__27065__auto___32433]));

var G__32434 = (i__27065__auto___32433 + (1));
i__27065__auto___32433 = G__32434;
continue;
} else {
}
break;
}

var G__32431 = args32429.length;
switch (G__32431) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32429.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args32436 = [];
var len__27064__auto___32439 = arguments.length;
var i__27065__auto___32440 = (0);
while(true){
if((i__27065__auto___32440 < len__27064__auto___32439)){
args32436.push((arguments[i__27065__auto___32440]));

var G__32441 = (i__27065__auto___32440 + (1));
i__27065__auto___32440 = G__32441;
continue;
} else {
}
break;
}

var G__32438 = args32436.length;
switch (G__32438) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32436.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args32443 = [];
var len__27064__auto___32449 = arguments.length;
var i__27065__auto___32450 = (0);
while(true){
if((i__27065__auto___32450 < len__27064__auto___32449)){
args32443.push((arguments[i__27065__auto___32450]));

var G__32451 = (i__27065__auto___32450 + (1));
i__27065__auto___32450 = G__32451;
continue;
} else {
}
break;
}

var G__32448 = args32443.length;
switch (G__32448) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27083__auto__ = (new cljs.core.IndexedSeq(args32443.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27083__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq32444){
var G__32445 = cljs.core.first.call(null,seq32444);
var seq32444__$1 = cljs.core.next.call(null,seq32444);
var G__32446 = cljs.core.first.call(null,seq32444__$1);
var seq32444__$2 = cljs.core.next.call(null,seq32444__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__32445,G__32446,seq32444__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args32453 = [];
var len__27064__auto___32459 = arguments.length;
var i__27065__auto___32460 = (0);
while(true){
if((i__27065__auto___32460 < len__27064__auto___32459)){
args32453.push((arguments[i__27065__auto___32460]));

var G__32461 = (i__27065__auto___32460 + (1));
i__27065__auto___32460 = G__32461;
continue;
} else {
}
break;
}

var G__32458 = args32453.length;
switch (G__32458) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27083__auto__ = (new cljs.core.IndexedSeq(args32453.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27083__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq32454){
var G__32455 = cljs.core.first.call(null,seq32454);
var seq32454__$1 = cljs.core.next.call(null,seq32454);
var G__32456 = cljs.core.first.call(null,seq32454__$1);
var seq32454__$2 = cljs.core.next.call(null,seq32454__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__32455,G__32456,seq32454__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args32463 = [];
var len__27064__auto___32466 = arguments.length;
var i__27065__auto___32467 = (0);
while(true){
if((i__27065__auto___32467 < len__27064__auto___32466)){
args32463.push((arguments[i__27065__auto___32467]));

var G__32468 = (i__27065__auto___32467 + (1));
i__27065__auto___32467 = G__32468;
continue;
} else {
}
break;
}

var G__32465 = args32463.length;
switch (G__32465) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32463.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args32470 = [];
var len__27064__auto___32473 = arguments.length;
var i__27065__auto___32474 = (0);
while(true){
if((i__27065__auto___32474 < len__27064__auto___32473)){
args32470.push((arguments[i__27065__auto___32474]));

var G__32475 = (i__27065__auto___32474 + (1));
i__27065__auto___32474 = G__32475;
continue;
} else {
}
break;
}

var G__32472 = args32470.length;
switch (G__32472) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32470.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__27071__auto__ = [];
var len__27064__auto___32479 = arguments.length;
var i__27065__auto___32480 = (0);
while(true){
if((i__27065__auto___32480 < len__27064__auto___32479)){
args__27071__auto__.push((arguments[i__27065__auto___32480]));

var G__32481 = (i__27065__auto___32480 + (1));
i__27065__auto___32480 = G__32481;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((1) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27072__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq32477){
var G__32478 = cljs.core.first.call(null,seq32477);
var seq32477__$1 = cljs.core.next.call(null,seq32477);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__32478,seq32477__$1);
});

cljs_time.core.month_range = (function cljs_time$core$month_range(p__32484){
var map__32487 = p__32484;
var map__32487__$1 = ((((!((map__32487 == null)))?((((map__32487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32487):map__32487);
var start = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.call(null,((function (map__32487,map__32487__$1,start,end){
return (function (p1__32483_SHARP_){
return cljs.core.not.call(null,cljs_time.core.after_QMARK_.call(null,p1__32483_SHARP_,end));
});})(map__32487,map__32487__$1,start,end))
,cljs.core.map.call(null,((function (map__32487,map__32487__$1,start,end){
return (function (p1__32482_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__32482_SHARP_ + (1))));
});})(map__32487,map__32487__$1,start,end))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__32489_SHARP_){
return p1__32489_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__32490){
var map__32493 = p__32490;
var map__32493__$1 = ((((!((map__32493 == null)))?((((map__32493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32493):map__32493);
var interval = map__32493__$1;
var start = cljs.core.get.call(null,map__32493__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__32493__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__32495){
var map__32498 = p__32495;
var map__32498__$1 = ((((!((map__32498 == null)))?((((map__32498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32498):map__32498);
var start = cljs.core.get.call(null,map__32498__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__32498__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__25977__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__25977__auto__)){
var and__25977__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__25977__auto____$1)){
var and__25977__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__25977__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__25977__auto____$2;
}
} else {
return and__25977__auto____$1;
}
} else {
return and__25977__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__32500){
var map__32501 = p__32500;
var map__32501__$1 = ((((!((map__32501 == null)))?((((map__32501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32501):map__32501);
var millis = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__32503 = this;
var map__32503__$1 = ((((!((map__32503 == null)))?((((map__32503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32503):map__32503);
var millis__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__32505){
var map__32506 = p__32505;
var map__32506__$1 = ((((!((map__32506 == null)))?((((map__32506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32506):map__32506);
var millis = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__32508 = this;
var map__32508__$1 = ((((!((map__32508 == null)))?((((map__32508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32508):map__32508);
var millis__$1 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__25989__auto__ = years__$1;
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
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
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__32510){
var map__32511 = p__32510;
var map__32511__$1 = ((((!((map__32511 == null)))?((((map__32511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32511):map__32511);
var millis = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__32513 = this;
var map__32513__$1 = ((((!((map__32513 == null)))?((((map__32513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32513):map__32513);
var millis__$1 = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
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
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__32515){
var map__32516 = p__32515;
var map__32516__$1 = ((((!((map__32516 == null)))?((((map__32516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32516):map__32516);
var start = cljs.core.get.call(null,map__32516__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__32516__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__32518 = this;
var map__32518__$1 = ((((!((map__32518 == null)))?((((map__32518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32518):map__32518);
var start__$1 = cljs.core.get.call(null,map__32518__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__32518__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args32520 = [];
var len__27064__auto___32526 = arguments.length;
var i__27065__auto___32527 = (0);
while(true){
if((i__27065__auto___32527 < len__27064__auto___32526)){
args32520.push((arguments[i__27065__auto___32527]));

var G__32528 = (i__27065__auto___32527 + (1));
i__27065__auto___32527 = G__32528;
continue;
} else {
}
break;
}

var G__32522 = args32520.length;
switch (G__32522) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32520.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32523,date){
var map__32524 = p__32523;
var map__32524__$1 = ((((!((map__32524 == null)))?((((map__32524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32524):map__32524);
var start = cljs.core.get.call(null,map__32524__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__32524__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__25989__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
var and__25977__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__25977__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__25977__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args32530 = [];
var len__27064__auto___32539 = arguments.length;
var i__27065__auto___32540 = (0);
while(true){
if((i__27065__auto___32540 < len__27064__auto___32539)){
args32530.push((arguments[i__27065__auto___32540]));

var G__32541 = (i__27065__auto___32540 + (1));
i__27065__auto___32540 = G__32541;
continue;
} else {
}
break;
}

var G__32532 = args32530.length;
switch (G__32532) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32530.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32533,p__32534){
var map__32535 = p__32533;
var map__32535__$1 = ((((!((map__32535 == null)))?((((map__32535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32535):map__32535);
var start_a = cljs.core.get.call(null,map__32535__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__32535__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__32536 = p__32534;
var map__32536__$1 = ((((!((map__32536 == null)))?((((map__32536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32536):map__32536);
var start_b = cljs.core.get.call(null,map__32536__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__32536__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__25977__auto__ = cljs.core.not.call(null,(function (){var or__25989__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__25977__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__25977__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__25989__auto__ = (function (){var and__25977__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__25977__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__25977__auto__;
}
})();
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
var or__25989__auto____$1 = (function (){var and__25977__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__25977__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__25977__auto__;
}
})();
if(cljs.core.truth_(or__25989__auto____$1)){
return or__25989__auto____$1;
} else {
var or__25989__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__25989__auto____$2)){
return or__25989__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Returns an Interval representing the overlap of the specified Intervals.
 *  Returns nil if the Intervals do not overlap.
 *  The first argument must not be nil.
 *  If the second argument is nil then the overlap of the first argument
 *  and a zero duration interval with both start and end times equal to the
 *  current time is returned.
 */
cljs_time.core.overlap = (function cljs_time$core$overlap(i_a,i_b){
if((i_b == null)){
var n = cljs_time.core.now.call(null);
return cljs_time$core$overlap.call(null,i_a,cljs_time.core.interval.call(null,n,n));
} else {
if(cljs.core.truth_(cljs_time.core.overlaps_QMARK_.call(null,i_a,i_b))){
return cljs_time.core.interval.call(null,cljs_time.core.latest.call(null,cljs_time.core.start.call(null,i_a),cljs_time.core.start.call(null,i_b)),cljs_time.core.earliest.call(null,cljs_time.core.end.call(null,i_a),cljs_time.core.end.call(null,i_b)));
} else {
return null;

}
}
});
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__32543,p__32544){
var map__32549 = p__32543;
var map__32549__$1 = ((((!((map__32549 == null)))?((((map__32549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32549):map__32549);
var start_a = cljs.core.get.call(null,map__32549__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__32549__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__32550 = p__32544;
var map__32550__$1 = ((((!((map__32550 == null)))?((((map__32550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32550):map__32550);
var start_b = cljs.core.get.call(null,map__32550__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__32550__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__25989__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs_time$core$DateTimeProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__25977__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__25977__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__25977__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args32555 = [];
var len__27064__auto___32558 = arguments.length;
var i__27065__auto___32559 = (0);
while(true){
if((i__27065__auto___32559 < len__27064__auto___32558)){
args32555.push((arguments[i__27065__auto___32559]));

var G__32560 = (i__27065__auto___32559 + (1));
i__27065__auto___32559 = G__32560;
continue;
} else {
}
break;
}

var G__32557 = args32555.length;
switch (G__32557) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32555.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args32562 = [];
var len__27064__auto___32565 = arguments.length;
var i__27065__auto___32566 = (0);
while(true){
if((i__27065__auto___32566 < len__27064__auto___32565)){
args32562.push((arguments[i__27065__auto___32566]));

var G__32567 = (i__27065__auto___32566 + (1));
i__27065__auto___32566 = G__32567;
continue;
} else {
}
break;
}

var G__32564 = args32562.length;
switch (G__32564) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32562.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args32569 = [];
var len__27064__auto___32572 = arguments.length;
var i__27065__auto___32573 = (0);
while(true){
if((i__27065__auto___32573 < len__27064__auto___32572)){
args32569.push((arguments[i__27065__auto___32573]));

var G__32574 = (i__27065__auto___32573 + (1));
i__27065__auto___32573 = G__32574;
continue;
} else {
}
break;
}

var G__32571 = args32569.length;
switch (G__32571) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32569.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__26652__auto__ = (((obj == null))?null:obj);
var m__26653__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,obj);
} else {
var m__26653__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__32576){
var map__32577 = p__32576;
var map__32577__$1 = ((((!((map__32577 == null)))?((((map__32577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32577):map__32577);
var interval = map__32577__$1;
var start = cljs.core.get.call(null,map__32577__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__32577__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__32579 = this;
var map__32579__$1 = ((((!((map__32579 == null)))?((((map__32579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32579):map__32579);
var interval__$1 = map__32579__$1;
var start__$1 = cljs.core.get.call(null,map__32579__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__32579__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = cljs_time.core.in_years.call(null,interval__$1);
var start_year = cljs_time.core.year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval__$1) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args32581 = [];
var len__27064__auto___32585 = arguments.length;
var i__27065__auto___32586 = (0);
while(true){
if((i__27065__auto___32586 < len__27064__auto___32585)){
args32581.push((arguments[i__27065__auto___32586]));

var G__32587 = (i__27065__auto___32586 + (1));
i__27065__auto___32586 = G__32587;
continue;
} else {
}
break;
}

var G__32583 = args32581.length;
switch (G__32583) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32581.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var G__32584 = (new goog.date.UtcDateTime());
G__32584.setHours(hours);

G__32584.setMinutes(minutes);

G__32584.setSeconds(seconds);

G__32584.setMilliseconds(millis);

return G__32584;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_32590 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn.call(null,base_date_time.getTime());

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_32590;
}});
/**
 * Floors the given date-time dt to the given time unit dt-fn,
 *  e.g. (floor (now) hour) returns (now) for all units
 *  up to and including the hour
 */
cljs_time.core.floor = (function cljs_time$core$floor(dt,dt_fn){
var dt_fns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.year,cljs_time.core.month,cljs_time.core.day,cljs_time.core.hour,cljs_time.core.minute,cljs_time.core.second,cljs_time.core.milli], null);
return cljs.core.apply.call(null,cljs_time.core.date_time,cljs.core.map.call(null,cljs.core.apply,cljs.core.concat.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,dt_fn),dt_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt_fn], null)),cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt], null))));
});

//# sourceMappingURL=core.js.map?rel=1500616860125