#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/argparse/index.js":
/*!****************************************!*\
  !*** ./node_modules/argparse/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib/argparse */ "./node_modules/argparse/lib/argparse.js");


/***/ }),

/***/ "./node_modules/argparse/lib/action.js":
/*!*********************************************!*\
  !*** ./node_modules/argparse/lib/action.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * class Action
 *
 * Base class for all actions
 * Do not call in your code, use this class only for inherits your own action
 *
 * Information about how to convert command line strings to Javascript objects.
 * Action objects are used by an ArgumentParser to represent the information
 * needed to parse a single argument from one or more strings from the command
 * line. The keyword arguments to the Action constructor are also all attributes
 * of Action instances.
 *
 * ##### Allowed keywords:
 *
 * - `store`
 * - `storeConstant`
 * - `storeTrue`
 * - `storeFalse`
 * - `append`
 * - `appendConstant`
 * - `count`
 * - `help`
 * - `version`
 *
 * Information about action options see [[Action.new]]
 *
 * See also [original guide](http://docs.python.org/dev/library/argparse.html#action)
 *
 **/




// Constants
var c = __webpack_require__(/*! ./const */ "./node_modules/argparse/lib/const.js");


/**
 * new Action(options)
 *
 * Base class for all actions. Used only for inherits
 *
 *
 * ##### Options:
 *
 * - `optionStrings`  A list of command-line option strings for the action.
 * - `dest`  Attribute to hold the created object(s)
 * - `nargs`  The number of command-line arguments that should be consumed.
 * By default, one argument will be consumed and a single value will be
 * produced.
 * - `constant`  Default value for an action with no value.
 * - `defaultValue`  The value to be produced if the option is not specified.
 * - `type`  Cast to 'string'|'int'|'float'|'complex'|function (string). If
 * None, 'string'.
 * - `choices`  The choices available.
 * - `required`  True if the action must always be specified at the command
 * line.
 * - `help`  The help describing the argument.
 * - `metavar`  The name to be used for the option's argument with the help
 * string. If None, the 'dest' value will be used as the name.
 *
 * ##### nargs supported values:
 *
 * - `N` (an integer) consumes N arguments (and produces a list)
 * - `?`  consumes zero or one arguments
 * - `*` consumes zero or more arguments (and produces a list)
 * - `+` consumes one or more arguments (and produces a list)
 *
 * Note: that the difference between the default and nargs=1 is that with the
 * default, a single value will be produced, while with nargs=1, a list
 * containing a single value will be produced.
 **/
var Action = module.exports = function Action(options) {
  options = options || {};
  this.optionStrings = options.optionStrings || [];
  this.dest = options.dest;
  this.nargs = typeof options.nargs !== 'undefined' ? options.nargs : null;
  this.constant = typeof options.constant !== 'undefined' ? options.constant : null;
  this.defaultValue = options.defaultValue;
  this.type = typeof options.type !== 'undefined' ? options.type : null;
  this.choices = typeof options.choices !== 'undefined' ? options.choices : null;
  this.required = typeof options.required !== 'undefined' ? options.required : false;
  this.help = typeof options.help !== 'undefined' ? options.help : null;
  this.metavar = typeof options.metavar !== 'undefined' ? options.metavar : null;

  if (!(this.optionStrings instanceof Array)) {
    throw new Error('optionStrings should be an array');
  }
  if (typeof this.required !== 'undefined' && typeof this.required !== 'boolean') {
    throw new Error('required should be a boolean');
  }
};

/**
 * Action#getName -> String
 *
 * Tells action name
 **/
Action.prototype.getName = function () {
  if (this.optionStrings.length > 0) {
    return this.optionStrings.join('/');
  } else if (this.metavar !== null && this.metavar !== c.SUPPRESS) {
    return this.metavar;
  } else if (typeof this.dest !== 'undefined' && this.dest !== c.SUPPRESS) {
    return this.dest;
  }
  return null;
};

/**
 * Action#isOptional -> Boolean
 *
 * Return true if optional
 **/
Action.prototype.isOptional = function () {
  return !this.isPositional();
};

/**
 * Action#isPositional -> Boolean
 *
 * Return true if positional
 **/
Action.prototype.isPositional = function () {
  return (this.optionStrings.length === 0);
};

/**
 * Action#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Should be implemented in inherited classes
 *
 * ##### Example
 *
 *      ActionCount.prototype.call = function (parser, namespace, values, optionString) {
 *        namespace.set(this.dest, (namespace[this.dest] || 0) + 1);
 *      };
 *
 **/
Action.prototype.call = function () {
  throw new Error('.call() not defined');// Not Implemented error
};


/***/ }),

/***/ "./node_modules/argparse/lib/action/append.js":
/*!****************************************************!*\
  !*** ./node_modules/argparse/lib/action/append.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionAppend
 *
 * This action stores a list, and appends each argument value to the list.
 * This is useful to allow an option to be specified multiple times.
 * This class inherided from [[Action]]
 *
 **/



var util = __webpack_require__(/*! util */ "util");

var Action = __webpack_require__(/*! ../action */ "./node_modules/argparse/lib/action.js");

// Constants
var c = __webpack_require__(/*! ../const */ "./node_modules/argparse/lib/const.js");

/*:nodoc:*
 * new ActionAppend(options)
 * - options (object): options hash see [[Action.new]]
 *
 * Note: options.nargs should be optional for constants
 * and more then zero for other
 **/
var ActionAppend = module.exports = function ActionAppend(options) {
  options = options || {};
  if (this.nargs <= 0) {
    throw new Error('nargs for append actions must be > 0; if arg ' +
        'strings are not supplying the value to append, ' +
        'the append const action may be more appropriate');
  }
  if (!!this.constant && this.nargs !== c.OPTIONAL) {
    throw new Error('nargs must be OPTIONAL to supply const');
  }
  Action.call(this, options);
};
util.inherits(ActionAppend, Action);

/*:nodoc:*
 * ActionAppend#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionAppend.prototype.call = function (parser, namespace, values) {
  var items = (namespace[this.dest] || []).slice();
  items.push(values);
  namespace.set(this.dest, items);
};


/***/ }),

/***/ "./node_modules/argparse/lib/action/append/constant.js":
/*!*************************************************************!*\
  !*** ./node_modules/argparse/lib/action/append/constant.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionAppendConstant
 *
 * This stores a list, and appends the value specified by
 * the const keyword argument to the list.
 * (Note that the const keyword argument defaults to null.)
 * The 'appendConst' action is typically useful when multiple
 * arguments need to store constants to the same list.
 *
 * This class inherited from [[Action]]
 **/



var util = __webpack_require__(/*! util */ "util");

var Action = __webpack_require__(/*! ../../action */ "./node_modules/argparse/lib/action.js");

/*:nodoc:*
 * new ActionAppendConstant(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionAppendConstant = module.exports = function ActionAppendConstant(options) {
  options = options || {};
  options.nargs = 0;
  if (typeof options.constant === 'undefined') {
    throw new Error('constant option is required for appendAction');
  }
  Action.call(this, options);
};
util.inherits(ActionAppendConstant, Action);

/*:nodoc:*
 * ActionAppendConstant#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionAppendConstant.prototype.call = function (parser, namespace) {
  var items = [].concat(namespace[this.dest] || []);
  items.push(this.constant);
  namespace.set(this.dest, items);
};


/***/ }),

/***/ "./node_modules/argparse/lib/action/count.js":
/*!***************************************************!*\
  !*** ./node_modules/argparse/lib/action/count.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionCount
 *
 * This counts the number of times a keyword argument occurs.
 * For example, this is useful for increasing verbosity levels
 *
 * This class inherided from [[Action]]
 *
 **/


var util = __webpack_require__(/*! util */ "util");

var Action = __webpack_require__(/*! ../action */ "./node_modules/argparse/lib/action.js");

/*:nodoc:*
 * new ActionCount(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionCount = module.exports = function ActionCount(options) {
  options = options || {};
  options.nargs = 0;

  Action.call(this, options);
};
util.inherits(ActionCount, Action);

/*:nodoc:*
 * ActionCount#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionCount.prototype.call = function (parser, namespace) {
  namespace.set(this.dest, (namespace[this.dest] || 0) + 1);
};


/***/ }),

/***/ "./node_modules/argparse/lib/action/help.js":
/*!**************************************************!*\
  !*** ./node_modules/argparse/lib/action/help.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionHelp
 *
 * Support action for printing help
 * This class inherided from [[Action]]
 **/


var util = __webpack_require__(/*! util */ "util");

var Action = __webpack_require__(/*! ../action */ "./node_modules/argparse/lib/action.js");

// Constants
var c  = __webpack_require__(/*! ../const */ "./node_modules/argparse/lib/const.js");

/*:nodoc:*
 * new ActionHelp(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionHelp = module.exports = function ActionHelp(options) {
  options = options || {};
  if (options.defaultValue !== null) {
    options.defaultValue = options.defaultValue;
  } else {
    options.defaultValue = c.SUPPRESS;
  }
  options.dest = (options.dest !== null ? options.dest : c.SUPPRESS);
  options.nargs = 0;
  Action.call(this, options);

};
util.inherits(ActionHelp, Action);

/*:nodoc:*
 * ActionHelp#call(parser, namespace, values, optionString)
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Print help and exit
 **/
ActionHelp.prototype.call = function (parser) {
  parser.printHelp();
  parser.exit();
};


/***/ }),

/***/ "./node_modules/argparse/lib/action/store.js":
/*!***************************************************!*\
  !*** ./node_modules/argparse/lib/action/store.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionStore
 *
 * This action just stores the argument’s value. This is the default action.
 *
 * This class inherited from [[Action]]
 *
 **/


var util = __webpack_require__(/*! util */ "util");

var Action = __webpack_require__(/*! ../action */ "./node_modules/argparse/lib/action.js");

// Constants
var c = __webpack_require__(/*! ../const */ "./node_modules/argparse/lib/const.js");


/*:nodoc:*
 * new ActionStore(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionStore = module.exports = function ActionStore(options) {
  options = options || {};
  if (this.nargs <= 0) {
    throw new Error('nargs for store actions must be > 0; if you ' +
        'have nothing to store, actions such as store ' +
        'true or store const may be more appropriate');

  }
  if (typeof this.constant !== 'undefined' && this.nargs !== c.OPTIONAL) {
    throw new Error('nargs must be OPTIONAL to supply const');
  }
  Action.call(this, options);
};
util.inherits(ActionStore, Action);

/*:nodoc:*
 * ActionStore#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionStore.prototype.call = function (parser, namespace, values) {
  namespace.set(this.dest, values);
};


/***/ }),

/***/ "./node_modules/argparse/lib/action/store/constant.js":
/*!************************************************************!*\
  !*** ./node_modules/argparse/lib/action/store/constant.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionStoreConstant
 *
 * This action stores the value specified by the const keyword argument.
 * (Note that the const keyword argument defaults to the rather unhelpful null.)
 * The 'store_const' action is most commonly used with optional
 * arguments that specify some sort of flag.
 *
 * This class inherited from [[Action]]
 **/


var util = __webpack_require__(/*! util */ "util");

var Action = __webpack_require__(/*! ../../action */ "./node_modules/argparse/lib/action.js");

/*:nodoc:*
 * new ActionStoreConstant(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionStoreConstant = module.exports = function ActionStoreConstant(options) {
  options = options || {};
  options.nargs = 0;
  if (typeof options.constant === 'undefined') {
    throw new Error('constant option is required for storeAction');
  }
  Action.call(this, options);
};
util.inherits(ActionStoreConstant, Action);

/*:nodoc:*
 * ActionStoreConstant#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionStoreConstant.prototype.call = function (parser, namespace) {
  namespace.set(this.dest, this.constant);
};


/***/ }),

/***/ "./node_modules/argparse/lib/action/store/false.js":
/*!*********************************************************!*\
  !*** ./node_modules/argparse/lib/action/store/false.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionStoreFalse
 *
 * This action store the values False respectively.
 * This is special cases of 'storeConst'
 *
 * This class inherited from [[Action]]
 **/



var util = __webpack_require__(/*! util */ "util");

var ActionStoreConstant = __webpack_require__(/*! ./constant */ "./node_modules/argparse/lib/action/store/constant.js");

/*:nodoc:*
 * new ActionStoreFalse(options)
 * - options (object): hash of options see [[Action.new]]
 *
 **/
var ActionStoreFalse = module.exports = function ActionStoreFalse(options) {
  options = options || {};
  options.constant = false;
  options.defaultValue = options.defaultValue !== null ? options.defaultValue : true;
  ActionStoreConstant.call(this, options);
};
util.inherits(ActionStoreFalse, ActionStoreConstant);


/***/ }),

/***/ "./node_modules/argparse/lib/action/store/true.js":
/*!********************************************************!*\
  !*** ./node_modules/argparse/lib/action/store/true.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionStoreTrue
 *
 * This action store the values True respectively.
 * This isspecial cases of 'storeConst'
 *
 * This class inherited from [[Action]]
 **/


var util = __webpack_require__(/*! util */ "util");

var ActionStoreConstant = __webpack_require__(/*! ./constant */ "./node_modules/argparse/lib/action/store/constant.js");

/*:nodoc:*
 * new ActionStoreTrue(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionStoreTrue = module.exports = function ActionStoreTrue(options) {
  options = options || {};
  options.constant = true;
  options.defaultValue = options.defaultValue !== null ? options.defaultValue : false;
  ActionStoreConstant.call(this, options);
};
util.inherits(ActionStoreTrue, ActionStoreConstant);


/***/ }),

/***/ "./node_modules/argparse/lib/action/subparsers.js":
/*!********************************************************!*\
  !*** ./node_modules/argparse/lib/action/subparsers.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class ActionSubparsers
 *
 * Support the creation of such sub-commands with the addSubparsers()
 *
 * This class inherited from [[Action]]
 **/


var util    = __webpack_require__(/*! util */ "util");
var format  = __webpack_require__(/*! util */ "util").format;


var Action = __webpack_require__(/*! ../action */ "./node_modules/argparse/lib/action.js");

// Constants
var c = __webpack_require__(/*! ../const */ "./node_modules/argparse/lib/const.js");

// Errors
var argumentErrorHelper = __webpack_require__(/*! ../argument/error */ "./node_modules/argparse/lib/argument/error.js");


/*:nodoc:*
 * new ChoicesPseudoAction(name, help)
 *
 * Create pseudo action for correct help text
 *
 **/
function ChoicesPseudoAction(name, help) {
  var options = {
    optionStrings: [],
    dest: name,
    help: help
  };

  Action.call(this, options);
}

util.inherits(ChoicesPseudoAction, Action);

/**
 * new ActionSubparsers(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
function ActionSubparsers(options) {
  options = options || {};
  options.dest = options.dest || c.SUPPRESS;
  options.nargs = c.PARSER;

  this.debug = (options.debug === true);

  this._progPrefix = options.prog;
  this._parserClass = options.parserClass;
  this._nameParserMap = {};
  this._choicesActions = [];

  options.choices = this._nameParserMap;
  Action.call(this, options);
}

util.inherits(ActionSubparsers, Action);

/*:nodoc:*
 * ActionSubparsers#addParser(name, options) -> ArgumentParser
 * - name (string): sub-command name
 * - options (object): see [[ArgumentParser.new]]
 *
 *  Note:
 *  addParser supports an additional aliases option,
 *  which allows multiple strings to refer to the same subparser.
 *  This example, like svn, aliases co as a shorthand for checkout
 *
 **/
ActionSubparsers.prototype.addParser = function (name, options) {
  var parser;

  var self = this;

  options = options || {};

  options.debug = (this.debug === true);

  // set program from the existing prefix
  if (!options.prog) {
    options.prog = this._progPrefix + ' ' + name;
  }

  var aliases = options.aliases || [];

  // create a pseudo-action to hold the choice help
  if (!!options.help || typeof options.help === 'string') {
    var help = options.help;
    delete options.help;

    var choiceAction = new ChoicesPseudoAction(name, help);
    this._choicesActions.push(choiceAction);
  }

  // create the parser and add it to the map
  parser = new this._parserClass(options);
  this._nameParserMap[name] = parser;

  // make parser available under aliases also
  aliases.forEach(function (alias) {
    self._nameParserMap[alias] = parser;
  });

  return parser;
};

ActionSubparsers.prototype._getSubactions = function () {
  return this._choicesActions;
};

/*:nodoc:*
 * ActionSubparsers#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Parse input aguments
 **/
ActionSubparsers.prototype.call = function (parser, namespace, values) {
  var parserName = values[0];
  var argStrings = values.slice(1);

  // set the parser name if requested
  if (this.dest !== c.SUPPRESS) {
    namespace[this.dest] = parserName;
  }

  // select the parser
  if (this._nameParserMap[parserName]) {
    parser = this._nameParserMap[parserName];
  } else {
    throw argumentErrorHelper(format(
      'Unknown parser "%s" (choices: [%s]).',
        parserName,
        Object.keys(this._nameParserMap).join(', ')
    ));
  }

  // parse all the remaining options into the namespace
  parser.parseArgs(argStrings, namespace);
};

module.exports = ActionSubparsers;


/***/ }),

/***/ "./node_modules/argparse/lib/action/version.js":
/*!*****************************************************!*\
  !*** ./node_modules/argparse/lib/action/version.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*:nodoc:*
 * class ActionVersion
 *
 * Support action for printing program version
 * This class inherited from [[Action]]
 **/


var util = __webpack_require__(/*! util */ "util");

var Action = __webpack_require__(/*! ../action */ "./node_modules/argparse/lib/action.js");

//
// Constants
//
var c = __webpack_require__(/*! ../const */ "./node_modules/argparse/lib/const.js");

/*:nodoc:*
 * new ActionVersion(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionVersion = module.exports = function ActionVersion(options) {
  options = options || {};
  options.defaultValue = (options.defaultValue ? options.defaultValue : c.SUPPRESS);
  options.dest = (options.dest || c.SUPPRESS);
  options.nargs = 0;
  this.version = options.version;
  Action.call(this, options);
};
util.inherits(ActionVersion, Action);

/*:nodoc:*
 * ActionVersion#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Print version and exit
 **/
ActionVersion.prototype.call = function (parser) {
  var version = this.version || parser.version;
  var formatter = parser._getFormatter();
  formatter.addText(version);
  parser.exit(0, formatter.formatHelp());
};


/***/ }),

/***/ "./node_modules/argparse/lib/action_container.js":
/*!*******************************************************!*\
  !*** ./node_modules/argparse/lib/action_container.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class ActionContainer
 *
 * Action container. Parent for [[ArgumentParser]] and [[ArgumentGroup]]
 **/



var format = __webpack_require__(/*! util */ "util").format;

// Constants
var c = __webpack_require__(/*! ./const */ "./node_modules/argparse/lib/const.js");

var $$ = __webpack_require__(/*! ./utils */ "./node_modules/argparse/lib/utils.js");

//Actions
var ActionHelp = __webpack_require__(/*! ./action/help */ "./node_modules/argparse/lib/action/help.js");
var ActionAppend = __webpack_require__(/*! ./action/append */ "./node_modules/argparse/lib/action/append.js");
var ActionAppendConstant = __webpack_require__(/*! ./action/append/constant */ "./node_modules/argparse/lib/action/append/constant.js");
var ActionCount = __webpack_require__(/*! ./action/count */ "./node_modules/argparse/lib/action/count.js");
var ActionStore = __webpack_require__(/*! ./action/store */ "./node_modules/argparse/lib/action/store.js");
var ActionStoreConstant = __webpack_require__(/*! ./action/store/constant */ "./node_modules/argparse/lib/action/store/constant.js");
var ActionStoreTrue = __webpack_require__(/*! ./action/store/true */ "./node_modules/argparse/lib/action/store/true.js");
var ActionStoreFalse = __webpack_require__(/*! ./action/store/false */ "./node_modules/argparse/lib/action/store/false.js");
var ActionVersion = __webpack_require__(/*! ./action/version */ "./node_modules/argparse/lib/action/version.js");
var ActionSubparsers = __webpack_require__(/*! ./action/subparsers */ "./node_modules/argparse/lib/action/subparsers.js");

// Errors
var argumentErrorHelper = __webpack_require__(/*! ./argument/error */ "./node_modules/argparse/lib/argument/error.js");

/**
 * new ActionContainer(options)
 *
 * Action container. Parent for [[ArgumentParser]] and [[ArgumentGroup]]
 *
 * ##### Options:
 *
 * - `description` -- A description of what the program does
 * - `prefixChars`  -- Characters that prefix optional arguments
 * - `argumentDefault`  -- The default value for all arguments
 * - `conflictHandler` -- The conflict handler to use for duplicate arguments
 **/
var ActionContainer = module.exports = function ActionContainer(options) {
  options = options || {};

  this.description = options.description;
  this.argumentDefault = options.argumentDefault;
  this.prefixChars = options.prefixChars || '';
  this.conflictHandler = options.conflictHandler;

  // set up registries
  this._registries = {};

  // register actions
  this.register('action', null, ActionStore);
  this.register('action', 'store', ActionStore);
  this.register('action', 'storeConst', ActionStoreConstant);
  this.register('action', 'storeTrue', ActionStoreTrue);
  this.register('action', 'storeFalse', ActionStoreFalse);
  this.register('action', 'append', ActionAppend);
  this.register('action', 'appendConst', ActionAppendConstant);
  this.register('action', 'count', ActionCount);
  this.register('action', 'help', ActionHelp);
  this.register('action', 'version', ActionVersion);
  this.register('action', 'parsers', ActionSubparsers);

  // raise an exception if the conflict handler is invalid
  this._getHandler();

  // action storage
  this._actions = [];
  this._optionStringActions = {};

  // groups
  this._actionGroups = [];
  this._mutuallyExclusiveGroups = [];

  // defaults storage
  this._defaults = {};

  // determines whether an "option" looks like a negative number
  // -1, -1.5 -5e+4
  this._regexpNegativeNumber = new RegExp('^[-]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?$');

  // whether or not there are any optionals that look like negative
  // numbers -- uses a list so it can be shared and edited
  this._hasNegativeNumberOptionals = [];
};

// Groups must be required, then ActionContainer already defined
var ArgumentGroup = __webpack_require__(/*! ./argument/group */ "./node_modules/argparse/lib/argument/group.js");
var MutuallyExclusiveGroup = __webpack_require__(/*! ./argument/exclusive */ "./node_modules/argparse/lib/argument/exclusive.js");

//
// Registration methods
//

/**
 * ActionContainer#register(registryName, value, object) -> Void
 * - registryName (String) : object type action|type
 * - value (string) : keyword
 * - object (Object|Function) : handler
 *
 *  Register handlers
 **/
ActionContainer.prototype.register = function (registryName, value, object) {
  this._registries[registryName] = this._registries[registryName] || {};
  this._registries[registryName][value] = object;
};

ActionContainer.prototype._registryGet = function (registryName, value, defaultValue) {
  if (arguments.length < 3) {
    defaultValue = null;
  }
  return this._registries[registryName][value] || defaultValue;
};

//
// Namespace default accessor methods
//

/**
 * ActionContainer#setDefaults(options) -> Void
 * - options (object):hash of options see [[Action.new]]
 *
 * Set defaults
 **/
ActionContainer.prototype.setDefaults = function (options) {
  options = options || {};
  for (var property in options) {
    if ($$.has(options, property)) {
      this._defaults[property] = options[property];
    }
  }

  // if these defaults match any existing arguments, replace the previous
  // default on the object with the new one
  this._actions.forEach(function (action) {
    if ($$.has(options, action.dest)) {
      action.defaultValue = options[action.dest];
    }
  });
};

/**
 * ActionContainer#getDefault(dest) -> Mixed
 * - dest (string): action destination
 *
 * Return action default value
 **/
ActionContainer.prototype.getDefault = function (dest) {
  var result = $$.has(this._defaults, dest) ? this._defaults[dest] : null;

  this._actions.forEach(function (action) {
    if (action.dest === dest && $$.has(action, 'defaultValue')) {
      result = action.defaultValue;
    }
  });

  return result;
};
//
// Adding argument actions
//

/**
 * ActionContainer#addArgument(args, options) -> Object
 * - args (String|Array): argument key, or array of argument keys
 * - options (Object): action objects see [[Action.new]]
 *
 * #### Examples
 * - addArgument([ '-f', '--foo' ], { action: 'store', defaultValue: 1, ... })
 * - addArgument([ 'bar' ], { action: 'store', nargs: 1, ... })
 * - addArgument('--baz', { action: 'store', nargs: 1, ... })
 **/
ActionContainer.prototype.addArgument = function (args, options) {
  args = args;
  options = options || {};

  if (typeof args === 'string') {
    args = [ args ];
  }
  if (!Array.isArray(args)) {
    throw new TypeError('addArgument first argument should be a string or an array');
  }
  if (typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('addArgument second argument should be a hash');
  }

  // if no positional args are supplied or only one is supplied and
  // it doesn't look like an option string, parse a positional argument
  if (!args || args.length === 1 && this.prefixChars.indexOf(args[0][0]) < 0) {
    if (args && !!options.dest) {
      throw new Error('dest supplied twice for positional argument');
    }
    options = this._getPositional(args, options);

    // otherwise, we're adding an optional argument
  } else {
    options = this._getOptional(args, options);
  }

  // if no default was supplied, use the parser-level default
  if (typeof options.defaultValue === 'undefined') {
    var dest = options.dest;
    if ($$.has(this._defaults, dest)) {
      options.defaultValue = this._defaults[dest];
    } else if (typeof this.argumentDefault !== 'undefined') {
      options.defaultValue = this.argumentDefault;
    }
  }

  // create the action object, and add it to the parser
  var ActionClass = this._popActionClass(options);
  if (typeof ActionClass !== 'function') {
    throw new Error(format('Unknown action "%s".', ActionClass));
  }
  var action = new ActionClass(options);

  // throw an error if the action type is not callable
  var typeFunction = this._registryGet('type', action.type, action.type);
  if (typeof typeFunction !== 'function') {
    throw new Error(format('"%s" is not callable', typeFunction));
  }

  return this._addAction(action);
};

/**
 * ActionContainer#addArgumentGroup(options) -> ArgumentGroup
 * - options (Object): hash of options see [[ArgumentGroup.new]]
 *
 * Create new arguments groups
 **/
ActionContainer.prototype.addArgumentGroup = function (options) {
  var group = new ArgumentGroup(this, options);
  this._actionGroups.push(group);
  return group;
};

/**
 * ActionContainer#addMutuallyExclusiveGroup(options) -> ArgumentGroup
 * - options (Object): {required: false}
 *
 * Create new mutual exclusive groups
 **/
ActionContainer.prototype.addMutuallyExclusiveGroup = function (options) {
  var group = new MutuallyExclusiveGroup(this, options);
  this._mutuallyExclusiveGroups.push(group);
  return group;
};

ActionContainer.prototype._addAction = function (action) {
  var self = this;

  // resolve any conflicts
  this._checkConflict(action);

  // add to actions list
  this._actions.push(action);
  action.container = this;

  // index the action by any option strings it has
  action.optionStrings.forEach(function (optionString) {
    self._optionStringActions[optionString] = action;
  });

  // set the flag if any option strings look like negative numbers
  action.optionStrings.forEach(function (optionString) {
    if (optionString.match(self._regexpNegativeNumber)) {
      if (!self._hasNegativeNumberOptionals.some(Boolean)) {
        self._hasNegativeNumberOptionals.push(true);
      }
    }
  });

  // return the created action
  return action;
};

ActionContainer.prototype._removeAction = function (action) {
  var actionIndex = this._actions.indexOf(action);
  if (actionIndex >= 0) {
    this._actions.splice(actionIndex, 1);
  }
};

ActionContainer.prototype._addContainerActions = function (container) {
  // collect groups by titles
  var titleGroupMap = {};
  this._actionGroups.forEach(function (group) {
    if (titleGroupMap[group.title]) {
      throw new Error(format('Cannot merge actions - two groups are named "%s".', group.title));
    }
    titleGroupMap[group.title] = group;
  });

  // map each action to its group
  var groupMap = {};
  function actionHash(action) {
    // unique (hopefully?) string suitable as dictionary key
    return action.getName();
  }
  container._actionGroups.forEach(function (group) {
    // if a group with the title exists, use that, otherwise
    // create a new group matching the container's group
    if (!titleGroupMap[group.title]) {
      titleGroupMap[group.title] = this.addArgumentGroup({
        title: group.title,
        description: group.description
      });
    }

    // map the actions to their new group
    group._groupActions.forEach(function (action) {
      groupMap[actionHash(action)] = titleGroupMap[group.title];
    });
  }, this);

  // add container's mutually exclusive groups
  // NOTE: if add_mutually_exclusive_group ever gains title= and
  // description= then this code will need to be expanded as above
  var mutexGroup;
  container._mutuallyExclusiveGroups.forEach(function (group) {
    mutexGroup = this.addMutuallyExclusiveGroup({
      required: group.required
    });
    // map the actions to their new mutex group
    group._groupActions.forEach(function (action) {
      groupMap[actionHash(action)] = mutexGroup;
    });
  }, this);  // forEach takes a 'this' argument

  // add all actions to this container or their group
  container._actions.forEach(function (action) {
    var key = actionHash(action);
    if (groupMap[key]) {
      groupMap[key]._addAction(action);
    } else {
      this._addAction(action);
    }
  });
};

ActionContainer.prototype._getPositional = function (dest, options) {
  if (Array.isArray(dest)) {
    dest = dest[0];
  }
  // make sure required is not specified
  if (options.required) {
    throw new Error('"required" is an invalid argument for positionals.');
  }

  // mark positional arguments as required if at least one is
  // always required
  if (options.nargs !== c.OPTIONAL && options.nargs !== c.ZERO_OR_MORE) {
    options.required = true;
  }
  if (options.nargs === c.ZERO_OR_MORE && typeof options.defaultValue === 'undefined') {
    options.required = true;
  }

  // return the keyword arguments with no option strings
  options.dest = dest;
  options.optionStrings = [];
  return options;
};

ActionContainer.prototype._getOptional = function (args, options) {
  var prefixChars = this.prefixChars;
  var optionStrings = [];
  var optionStringsLong = [];

  // determine short and long option strings
  args.forEach(function (optionString) {
    // error on strings that don't start with an appropriate prefix
    if (prefixChars.indexOf(optionString[0]) < 0) {
      throw new Error(format('Invalid option string "%s": must start with a "%s".',
        optionString,
        prefixChars
      ));
    }

    // strings starting with two prefix characters are long options
    optionStrings.push(optionString);
    if (optionString.length > 1 && prefixChars.indexOf(optionString[1]) >= 0) {
      optionStringsLong.push(optionString);
    }
  });

  // infer dest, '--foo-bar' -> 'foo_bar' and '-x' -> 'x'
  var dest = options.dest || null;
  delete options.dest;

  if (!dest) {
    var optionStringDest = optionStringsLong.length ? optionStringsLong[0] : optionStrings[0];
    dest = $$.trimChars(optionStringDest, this.prefixChars);

    if (dest.length === 0) {
      throw new Error(
        format('dest= is required for options like "%s"', optionStrings.join(', '))
      );
    }
    dest = dest.replace(/-/g, '_');
  }

  // return the updated keyword arguments
  options.dest = dest;
  options.optionStrings = optionStrings;

  return options;
};

ActionContainer.prototype._popActionClass = function (options, defaultValue) {
  defaultValue = defaultValue || null;

  var action = (options.action || defaultValue);
  delete options.action;

  var actionClass = this._registryGet('action', action, action);
  return actionClass;
};

ActionContainer.prototype._getHandler = function () {
  var handlerString = this.conflictHandler;
  var handlerFuncName = '_handleConflict' + $$.capitalize(handlerString);
  var func = this[handlerFuncName];
  if (typeof func === 'undefined') {
    var msg = 'invalid conflict resolution value: ' + handlerString;
    throw new Error(msg);
  } else {
    return func;
  }
};

ActionContainer.prototype._checkConflict = function (action) {
  var optionStringActions = this._optionStringActions;
  var conflictOptionals = [];

  // find all options that conflict with this option
  // collect pairs, the string, and an existing action that it conflicts with
  action.optionStrings.forEach(function (optionString) {
    var conflOptional = optionStringActions[optionString];
    if (typeof conflOptional !== 'undefined') {
      conflictOptionals.push([ optionString, conflOptional ]);
    }
  });

  if (conflictOptionals.length > 0) {
    var conflictHandler = this._getHandler();
    conflictHandler.call(this, action, conflictOptionals);
  }
};

ActionContainer.prototype._handleConflictError = function (action, conflOptionals) {
  var conflicts = conflOptionals.map(function (pair) { return pair[0]; });
  conflicts = conflicts.join(', ');
  throw argumentErrorHelper(
    action,
    format('Conflicting option string(s): %s', conflicts)
  );
};

ActionContainer.prototype._handleConflictResolve = function (action, conflOptionals) {
  // remove all conflicting options
  var self = this;
  conflOptionals.forEach(function (pair) {
    var optionString = pair[0];
    var conflictingAction = pair[1];
    // remove the conflicting option string
    var i = conflictingAction.optionStrings.indexOf(optionString);
    if (i >= 0) {
      conflictingAction.optionStrings.splice(i, 1);
    }
    delete self._optionStringActions[optionString];
    // if the option now has no option string, remove it from the
    // container holding it
    if (conflictingAction.optionStrings.length === 0) {
      conflictingAction.container._removeAction(conflictingAction);
    }
  });
};


/***/ }),

/***/ "./node_modules/argparse/lib/argparse.js":
/*!***********************************************!*\
  !*** ./node_modules/argparse/lib/argparse.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.ArgumentParser = __webpack_require__(/*! ./argument_parser.js */ "./node_modules/argparse/lib/argument_parser.js");
module.exports.Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/argparse/lib/namespace.js");
module.exports.Action = __webpack_require__(/*! ./action */ "./node_modules/argparse/lib/action.js");
module.exports.HelpFormatter = __webpack_require__(/*! ./help/formatter.js */ "./node_modules/argparse/lib/help/formatter.js");
module.exports.Const = __webpack_require__(/*! ./const.js */ "./node_modules/argparse/lib/const.js");

module.exports.ArgumentDefaultsHelpFormatter =
  __webpack_require__(/*! ./help/added_formatters.js */ "./node_modules/argparse/lib/help/added_formatters.js").ArgumentDefaultsHelpFormatter;
module.exports.RawDescriptionHelpFormatter =
  __webpack_require__(/*! ./help/added_formatters.js */ "./node_modules/argparse/lib/help/added_formatters.js").RawDescriptionHelpFormatter;
module.exports.RawTextHelpFormatter =
  __webpack_require__(/*! ./help/added_formatters.js */ "./node_modules/argparse/lib/help/added_formatters.js").RawTextHelpFormatter;


/***/ }),

/***/ "./node_modules/argparse/lib/argument/error.js":
/*!*****************************************************!*\
  !*** ./node_modules/argparse/lib/argument/error.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var format  = __webpack_require__(/*! util */ "util").format;


var ERR_CODE = 'ARGError';

/*:nodoc:*
 * argumentError(argument, message) -> TypeError
 * - argument (Object): action with broken argument
 * - message (String): error message
 *
 * Error format helper. An error from creating or using an argument
 * (optional or positional). The string value of this exception
 * is the message, augmented with information
 * about the argument that caused it.
 *
 * #####Example
 *
 *      var argumentErrorHelper = require('./argument/error');
 *      if (conflictOptionals.length > 0) {
 *        throw argumentErrorHelper(
 *          action,
 *          format('Conflicting option string(s): %s', conflictOptionals.join(', '))
 *        );
 *      }
 *
 **/
module.exports = function (argument, message) {
  var argumentName = null;
  var errMessage;
  var err;

  if (argument.getName) {
    argumentName = argument.getName();
  } else {
    argumentName = '' + argument;
  }

  if (!argumentName) {
    errMessage = message;
  } else {
    errMessage = format('argument "%s": %s', argumentName, message);
  }

  err = new TypeError(errMessage);
  err.code = ERR_CODE;
  return err;
};


/***/ }),

/***/ "./node_modules/argparse/lib/argument/exclusive.js":
/*!*********************************************************!*\
  !*** ./node_modules/argparse/lib/argument/exclusive.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class MutuallyExclusiveGroup
 *
 * Group arguments.
 * By default, ArgumentParser groups command-line arguments
 * into “positional arguments” and “optional arguments”
 * when displaying help messages. When there is a better
 * conceptual grouping of arguments than this default one,
 * appropriate groups can be created using the addArgumentGroup() method
 *
 * This class inherited from [[ArgumentContainer]]
 **/


var util = __webpack_require__(/*! util */ "util");

var ArgumentGroup = __webpack_require__(/*! ./group */ "./node_modules/argparse/lib/argument/group.js");

/**
 * new MutuallyExclusiveGroup(container, options)
 * - container (object): main container
 * - options (object): options.required -> true/false
 *
 * `required` could be an argument itself, but making it a property of
 * the options argument is more consistent with the JS adaptation of the Python)
 **/
var MutuallyExclusiveGroup = module.exports = function MutuallyExclusiveGroup(container, options) {
  var required;
  options = options || {};
  required = options.required || false;
  ArgumentGroup.call(this, container);
  this.required = required;

};
util.inherits(MutuallyExclusiveGroup, ArgumentGroup);


MutuallyExclusiveGroup.prototype._addAction = function (action) {
  var msg;
  if (action.required) {
    msg = 'mutually exclusive arguments must be optional';
    throw new Error(msg);
  }
  action = this._container._addAction(action);
  this._groupActions.push(action);
  return action;
};


MutuallyExclusiveGroup.prototype._removeAction = function (action) {
  this._container._removeAction(action);
  this._groupActions.remove(action);
};



/***/ }),

/***/ "./node_modules/argparse/lib/argument/group.js":
/*!*****************************************************!*\
  !*** ./node_modules/argparse/lib/argument/group.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class ArgumentGroup
 *
 * Group arguments.
 * By default, ArgumentParser groups command-line arguments
 * into “positional arguments” and “optional arguments”
 * when displaying help messages. When there is a better
 * conceptual grouping of arguments than this default one,
 * appropriate groups can be created using the addArgumentGroup() method
 *
 * This class inherited from [[ArgumentContainer]]
 **/


var util = __webpack_require__(/*! util */ "util");

var ActionContainer = __webpack_require__(/*! ../action_container */ "./node_modules/argparse/lib/action_container.js");


/**
 * new ArgumentGroup(container, options)
 * - container (object): main container
 * - options (object): hash of group options
 *
 * #### options
 * - **prefixChars**  group name prefix
 * - **argumentDefault**  default argument value
 * - **title**  group title
 * - **description** group description
 *
 **/
var ArgumentGroup = module.exports = function ArgumentGroup(container, options) {

  options = options || {};

  // add any missing keyword arguments by checking the container
  options.conflictHandler = (options.conflictHandler || container.conflictHandler);
  options.prefixChars = (options.prefixChars || container.prefixChars);
  options.argumentDefault = (options.argumentDefault || container.argumentDefault);

  ActionContainer.call(this, options);

  // group attributes
  this.title = options.title;
  this._groupActions = [];

  // share most attributes with the container
  this._container = container;
  this._registries = container._registries;
  this._actions = container._actions;
  this._optionStringActions = container._optionStringActions;
  this._defaults = container._defaults;
  this._hasNegativeNumberOptionals = container._hasNegativeNumberOptionals;
  this._mutuallyExclusiveGroups = container._mutuallyExclusiveGroups;
};
util.inherits(ArgumentGroup, ActionContainer);


ArgumentGroup.prototype._addAction = function (action) {
  // Parent add action
  action = ActionContainer.prototype._addAction.call(this, action);
  this._groupActions.push(action);
  return action;
};


ArgumentGroup.prototype._removeAction = function (action) {
  // Parent remove action
  ActionContainer.prototype._removeAction.call(this, action);
  var actionIndex = this._groupActions.indexOf(action);
  if (actionIndex >= 0) {
    this._groupActions.splice(actionIndex, 1);
  }
};



/***/ }),

/***/ "./node_modules/argparse/lib/argument_parser.js":
/*!******************************************************!*\
  !*** ./node_modules/argparse/lib/argument_parser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * class ArgumentParser
 *
 * Object for parsing command line strings into js objects.
 *
 * Inherited from [[ActionContainer]]
 **/


var util    = __webpack_require__(/*! util */ "util");
var format  = __webpack_require__(/*! util */ "util").format;
var Path    = __webpack_require__(/*! path */ "path");
var sprintf = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js").sprintf;

// Constants
var c = __webpack_require__(/*! ./const */ "./node_modules/argparse/lib/const.js");

var $$ = __webpack_require__(/*! ./utils */ "./node_modules/argparse/lib/utils.js");

var ActionContainer = __webpack_require__(/*! ./action_container */ "./node_modules/argparse/lib/action_container.js");

// Errors
var argumentErrorHelper = __webpack_require__(/*! ./argument/error */ "./node_modules/argparse/lib/argument/error.js");

var HelpFormatter = __webpack_require__(/*! ./help/formatter */ "./node_modules/argparse/lib/help/formatter.js");

var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/argparse/lib/namespace.js");


/**
 * new ArgumentParser(options)
 *
 * Create a new ArgumentParser object.
 *
 * ##### Options:
 * - `prog`  The name of the program (default: Path.basename(process.argv[1]))
 * - `usage`  A usage message (default: auto-generated from arguments)
 * - `description`  A description of what the program does
 * - `epilog`  Text following the argument descriptions
 * - `parents`  Parsers whose arguments should be copied into this one
 * - `formatterClass`  HelpFormatter class for printing help messages
 * - `prefixChars`  Characters that prefix optional arguments
 * - `fromfilePrefixChars` Characters that prefix files containing additional arguments
 * - `argumentDefault`  The default value for all arguments
 * - `addHelp`  Add a -h/-help option
 * - `conflictHandler`  Specifies how to handle conflicting argument names
 * - `debug`  Enable debug mode. Argument errors throw exception in
 *   debug mode and process.exit in normal. Used for development and
 *   testing (default: false)
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#argumentparser-objects
 **/
function ArgumentParser(options) {
  if (!(this instanceof ArgumentParser)) {
    return new ArgumentParser(options);
  }
  var self = this;
  options = options || {};

  options.description = (options.description || null);
  options.argumentDefault = (options.argumentDefault || null);
  options.prefixChars = (options.prefixChars || '-');
  options.conflictHandler = (options.conflictHandler || 'error');
  ActionContainer.call(this, options);

  options.addHelp = typeof options.addHelp === 'undefined' || !!options.addHelp;
  options.parents = options.parents || [];
  // default program name
  options.prog = (options.prog || Path.basename(process.argv[1]));
  this.prog = options.prog;
  this.usage = options.usage;
  this.epilog = options.epilog;
  this.version = options.version;

  this.debug = (options.debug === true);

  this.formatterClass = (options.formatterClass || HelpFormatter);
  this.fromfilePrefixChars = options.fromfilePrefixChars || null;
  this._positionals = this.addArgumentGroup({ title: 'Positional arguments' });
  this._optionals = this.addArgumentGroup({ title: 'Optional arguments' });
  this._subparsers = null;

  // register types
  function FUNCTION_IDENTITY(o) {
    return o;
  }
  this.register('type', 'auto', FUNCTION_IDENTITY);
  this.register('type', null, FUNCTION_IDENTITY);
  this.register('type', 'int', function (x) {
    var result = parseInt(x, 10);
    if (isNaN(result)) {
      throw new Error(x + ' is not a valid integer.');
    }
    return result;
  });
  this.register('type', 'float', function (x) {
    var result = parseFloat(x);
    if (isNaN(result)) {
      throw new Error(x + ' is not a valid float.');
    }
    return result;
  });
  this.register('type', 'string', function (x) {
    return '' + x;
  });

  // add help and version arguments if necessary
  var defaultPrefix = (this.prefixChars.indexOf('-') > -1) ? '-' : this.prefixChars[0];
  if (options.addHelp) {
    this.addArgument(
      [ defaultPrefix + 'h', defaultPrefix + defaultPrefix + 'help' ],
      {
        action: 'help',
        defaultValue: c.SUPPRESS,
        help: 'Show this help message and exit.'
      }
    );
  }
  if (typeof this.version !== 'undefined') {
    this.addArgument(
      [ defaultPrefix + 'v', defaultPrefix + defaultPrefix + 'version' ],
      {
        action: 'version',
        version: this.version,
        defaultValue: c.SUPPRESS,
        help: "Show program's version number and exit."
      }
    );
  }

  // add parent arguments and defaults
  options.parents.forEach(function (parent) {
    self._addContainerActions(parent);
    if (typeof parent._defaults !== 'undefined') {
      for (var defaultKey in parent._defaults) {
        if (parent._defaults.hasOwnProperty(defaultKey)) {
          self._defaults[defaultKey] = parent._defaults[defaultKey];
        }
      }
    }
  });
}

util.inherits(ArgumentParser, ActionContainer);

/**
 * ArgumentParser#addSubparsers(options) -> [[ActionSubparsers]]
 * - options (object): hash of options see [[ActionSubparsers.new]]
 *
 * See also [subcommands][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#sub-commands
 **/
ArgumentParser.prototype.addSubparsers = function (options) {
  if (this._subparsers) {
    this.error('Cannot have multiple subparser arguments.');
  }

  options = options || {};
  options.debug = (this.debug === true);
  options.optionStrings = [];
  options.parserClass = (options.parserClass || ArgumentParser);


  if (!!options.title || !!options.description) {

    this._subparsers = this.addArgumentGroup({
      title: (options.title || 'subcommands'),
      description: options.description
    });
    delete options.title;
    delete options.description;

  } else {
    this._subparsers = this._positionals;
  }

  // prog defaults to the usage message of this parser, skipping
  // optional arguments and with no "usage:" prefix
  if (!options.prog) {
    var formatter = this._getFormatter();
    var positionals = this._getPositionalActions();
    var groups = this._mutuallyExclusiveGroups;
    formatter.addUsage(this.usage, positionals, groups, '');
    options.prog = formatter.formatHelp().trim();
  }

  // create the parsers action and add it to the positionals list
  var ParsersClass = this._popActionClass(options, 'parsers');
  var action = new ParsersClass(options);
  this._subparsers._addAction(action);

  // return the created parsers action
  return action;
};

ArgumentParser.prototype._addAction = function (action) {
  if (action.isOptional()) {
    this._optionals._addAction(action);
  } else {
    this._positionals._addAction(action);
  }
  return action;
};

ArgumentParser.prototype._getOptionalActions = function () {
  return this._actions.filter(function (action) {
    return action.isOptional();
  });
};

ArgumentParser.prototype._getPositionalActions = function () {
  return this._actions.filter(function (action) {
    return action.isPositional();
  });
};


/**
 * ArgumentParser#parseArgs(args, namespace) -> Namespace|Object
 * - args (array): input elements
 * - namespace (Namespace|Object): result object
 *
 * Parsed args and throws error if some arguments are not recognized
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#the-parse-args-method
 **/
ArgumentParser.prototype.parseArgs = function (args, namespace) {
  var argv;
  var result = this.parseKnownArgs(args, namespace);

  args = result[0];
  argv = result[1];
  if (argv && argv.length > 0) {
    this.error(
      format('Unrecognized arguments: %s.', argv.join(' '))
    );
  }
  return args;
};

/**
 * ArgumentParser#parseKnownArgs(args, namespace) -> array
 * - args (array): input options
 * - namespace (Namespace|Object): result object
 *
 * Parse known arguments and return tuple of result object
 * and unknown args
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#partial-parsing
 **/
ArgumentParser.prototype.parseKnownArgs = function (args, namespace) {
  var self = this;

  // args default to the system args
  args = args || process.argv.slice(2);

  // default Namespace built from parser defaults
  namespace = namespace || new Namespace();

  self._actions.forEach(function (action) {
    if (action.dest !== c.SUPPRESS) {
      if (!$$.has(namespace, action.dest)) {
        if (action.defaultValue !== c.SUPPRESS) {
          var defaultValue = action.defaultValue;
          if (typeof action.defaultValue === 'string') {
            defaultValue = self._getValue(action, defaultValue);
          }
          namespace[action.dest] = defaultValue;
        }
      }
    }
  });

  Object.keys(self._defaults).forEach(function (dest) {
    namespace[dest] = self._defaults[dest];
  });

  // parse the arguments and exit if there are any errors
  try {
    var res = this._parseKnownArgs(args, namespace);

    namespace = res[0];
    args = res[1];
    if ($$.has(namespace, c._UNRECOGNIZED_ARGS_ATTR)) {
      args = $$.arrayUnion(args, namespace[c._UNRECOGNIZED_ARGS_ATTR]);
      delete namespace[c._UNRECOGNIZED_ARGS_ATTR];
    }
    return [ namespace, args ];
  } catch (e) {
    this.error(e);
  }
};

ArgumentParser.prototype._parseKnownArgs = function (argStrings, namespace) {
  var self = this;

  var extras = [];

  // replace arg strings that are file references
  if (this.fromfilePrefixChars !== null) {
    argStrings = this._readArgsFromFiles(argStrings);
  }
  // map all mutually exclusive arguments to the other arguments
  // they can't occur with
  // Python has 'conflicts = action_conflicts.setdefault(mutex_action, [])'
  // though I can't conceive of a way in which an action could be a member
  // of two different mutually exclusive groups.

  function actionHash(action) {
    // some sort of hashable key for this action
    // action itself cannot be a key in actionConflicts
    // I think getName() (join of optionStrings) is unique enough
    return action.getName();
  }

  var conflicts, key;
  var actionConflicts = {};

  this._mutuallyExclusiveGroups.forEach(function (mutexGroup) {
    mutexGroup._groupActions.forEach(function (mutexAction, i, groupActions) {
      key = actionHash(mutexAction);
      if (!$$.has(actionConflicts, key)) {
        actionConflicts[key] = [];
      }
      conflicts = actionConflicts[key];
      conflicts.push.apply(conflicts, groupActions.slice(0, i));
      conflicts.push.apply(conflicts, groupActions.slice(i + 1));
    });
  });

  // find all option indices, and determine the arg_string_pattern
  // which has an 'O' if there is an option at an index,
  // an 'A' if there is an argument, or a '-' if there is a '--'
  var optionStringIndices = {};

  var argStringPatternParts = [];

  argStrings.forEach(function (argString, argStringIndex) {
    if (argString === '--') {
      argStringPatternParts.push('-');
      while (argStringIndex < argStrings.length) {
        argStringPatternParts.push('A');
        argStringIndex++;
      }
    } else {
      // otherwise, add the arg to the arg strings
      // and note the index if it was an option
      var pattern;
      var optionTuple = self._parseOptional(argString);
      if (!optionTuple) {
        pattern = 'A';
      } else {
        optionStringIndices[argStringIndex] = optionTuple;
        pattern = 'O';
      }
      argStringPatternParts.push(pattern);
    }
  });
  var argStringsPattern = argStringPatternParts.join('');

  var seenActions = [];
  var seenNonDefaultActions = [];


  function takeAction(action, argumentStrings, optionString) {
    seenActions.push(action);
    var argumentValues = self._getValues(action, argumentStrings);

    // error if this argument is not allowed with other previously
    // seen arguments, assuming that actions that use the default
    // value don't really count as "present"
    if (argumentValues !== action.defaultValue) {
      seenNonDefaultActions.push(action);
      if (actionConflicts[actionHash(action)]) {
        actionConflicts[actionHash(action)].forEach(function (actionConflict) {
          if (seenNonDefaultActions.indexOf(actionConflict) >= 0) {
            throw argumentErrorHelper(
              action,
              format('Not allowed with argument "%s".', actionConflict.getName())
            );
          }
        });
      }
    }

    if (argumentValues !== c.SUPPRESS) {
      action.call(self, namespace, argumentValues, optionString);
    }
  }

  function consumeOptional(startIndex) {
    // get the optional identified at this index
    var optionTuple = optionStringIndices[startIndex];
    var action = optionTuple[0];
    var optionString = optionTuple[1];
    var explicitArg = optionTuple[2];

    // identify additional optionals in the same arg string
    // (e.g. -xyz is the same as -x -y -z if no args are required)
    var actionTuples = [];

    var args, argCount, start, stop;

    for (;;) {
      if (!action) {
        extras.push(argStrings[startIndex]);
        return startIndex + 1;
      }
      if (explicitArg) {
        argCount = self._matchArgument(action, 'A');

        // if the action is a single-dash option and takes no
        // arguments, try to parse more single-dash options out
        // of the tail of the option string
        var chars = self.prefixChars;
        if (argCount === 0 && chars.indexOf(optionString[1]) < 0) {
          actionTuples.push([ action, [], optionString ]);
          optionString = optionString[0] + explicitArg[0];
          var newExplicitArg = explicitArg.slice(1) || null;
          var optionalsMap = self._optionStringActions;

          if (Object.keys(optionalsMap).indexOf(optionString) >= 0) {
            action = optionalsMap[optionString];
            explicitArg = newExplicitArg;
          } else {
            throw argumentErrorHelper(action, sprintf('ignored explicit argument %r', explicitArg));
          }
        } else if (argCount === 1) {
          // if the action expect exactly one argument, we've
          // successfully matched the option; exit the loop
          stop = startIndex + 1;
          args = [ explicitArg ];
          actionTuples.push([ action, args, optionString ]);
          break;
        } else {
          // error if a double-dash option did not use the
          // explicit argument
          throw argumentErrorHelper(action, sprintf('ignored explicit argument %r', explicitArg));
        }
      } else {
        // if there is no explicit argument, try to match the
        // optional's string arguments with the following strings
        // if successful, exit the loop

        start = startIndex + 1;
        var selectedPatterns = argStringsPattern.substr(start);

        argCount = self._matchArgument(action, selectedPatterns);
        stop = start + argCount;


        args = argStrings.slice(start, stop);

        actionTuples.push([ action, args, optionString ]);
        break;
      }

    }

    // add the Optional to the list and return the index at which
    // the Optional's string args stopped
    if (actionTuples.length < 1) {
      throw new Error('length should be > 0');
    }
    for (var i = 0; i < actionTuples.length; i++) {
      takeAction.apply(self, actionTuples[i]);
    }
    return stop;
  }

  // the list of Positionals left to be parsed; this is modified
  // by consume_positionals()
  var positionals = self._getPositionalActions();

  function consumePositionals(startIndex) {
    // match as many Positionals as possible
    var selectedPattern = argStringsPattern.substr(startIndex);
    var argCounts = self._matchArgumentsPartial(positionals, selectedPattern);

    // slice off the appropriate arg strings for each Positional
    // and add the Positional and its args to the list
    for (var i = 0; i < positionals.length; i++) {
      var action = positionals[i];
      var argCount = argCounts[i];
      if (typeof argCount === 'undefined') {
        continue;
      }
      var args = argStrings.slice(startIndex, startIndex + argCount);

      startIndex += argCount;
      takeAction(action, args);
    }

    // slice off the Positionals that we just parsed and return the
    // index at which the Positionals' string args stopped
    positionals = positionals.slice(argCounts.length);
    return startIndex;
  }

  // consume Positionals and Optionals alternately, until we have
  // passed the last option string
  var startIndex = 0;
  var position;

  var maxOptionStringIndex = -1;

  Object.keys(optionStringIndices).forEach(function (position) {
    maxOptionStringIndex = Math.max(maxOptionStringIndex, parseInt(position, 10));
  });

  var positionalsEndIndex, nextOptionStringIndex;

  while (startIndex <= maxOptionStringIndex) {
    // consume any Positionals preceding the next option
    nextOptionStringIndex = null;
    for (position in optionStringIndices) {
      if (!optionStringIndices.hasOwnProperty(position)) { continue; }

      position = parseInt(position, 10);
      if (position >= startIndex) {
        if (nextOptionStringIndex !== null) {
          nextOptionStringIndex = Math.min(nextOptionStringIndex, position);
        } else {
          nextOptionStringIndex = position;
        }
      }
    }

    if (startIndex !== nextOptionStringIndex) {
      positionalsEndIndex = consumePositionals(startIndex);
      // only try to parse the next optional if we didn't consume
      // the option string during the positionals parsing
      if (positionalsEndIndex > startIndex) {
        startIndex = positionalsEndIndex;
        continue;
      } else {
        startIndex = positionalsEndIndex;
      }
    }

    // if we consumed all the positionals we could and we're not
    // at the index of an option string, there were extra arguments
    if (!optionStringIndices[startIndex]) {
      var strings = argStrings.slice(startIndex, nextOptionStringIndex);
      extras = extras.concat(strings);
      startIndex = nextOptionStringIndex;
    }
    // consume the next optional and any arguments for it
    startIndex = consumeOptional(startIndex);
  }

  // consume any positionals following the last Optional
  var stopIndex = consumePositionals(startIndex);

  // if we didn't consume all the argument strings, there were extras
  extras = extras.concat(argStrings.slice(stopIndex));

  // if we didn't use all the Positional objects, there were too few
  // arg strings supplied.
  if (positionals.length > 0) {
    self.error('too few arguments');
  }

  // make sure all required actions were present
  self._actions.forEach(function (action) {
    if (action.required) {
      if (seenActions.indexOf(action) < 0) {
        self.error(format('Argument "%s" is required', action.getName()));
      }
    }
  });

  // make sure all required groups have one option present
  var actionUsed = false;
  self._mutuallyExclusiveGroups.forEach(function (group) {
    if (group.required) {
      actionUsed = group._groupActions.some(function (action) {
        return seenNonDefaultActions.indexOf(action) !== -1;
      });

      // if no actions were used, report the error
      if (!actionUsed) {
        var names = [];
        group._groupActions.forEach(function (action) {
          if (action.help !== c.SUPPRESS) {
            names.push(action.getName());
          }
        });
        names = names.join(' ');
        var msg = 'one of the arguments ' + names + ' is required';
        self.error(msg);
      }
    }
  });

  // return the updated namespace and the extra arguments
  return [ namespace, extras ];
};

ArgumentParser.prototype._readArgsFromFiles = function (argStrings) {
  // expand arguments referencing files
  var self = this;
  var fs = __webpack_require__(/*! fs */ "fs");
  var newArgStrings = [];
  argStrings.forEach(function (argString) {
    if (self.fromfilePrefixChars.indexOf(argString[0]) < 0) {
      // for regular arguments, just add them back into the list
      newArgStrings.push(argString);
    } else {
      // replace arguments referencing files with the file content
      try {
        var argstrs = [];
        var filename = argString.slice(1);
        var content = fs.readFileSync(filename, 'utf8');
        content = content.trim().split('\n');
        content.forEach(function (argLine) {
          self.convertArgLineToArgs(argLine).forEach(function (arg) {
            argstrs.push(arg);
          });
          argstrs = self._readArgsFromFiles(argstrs);
        });
        newArgStrings.push.apply(newArgStrings, argstrs);
      } catch (error) {
        return self.error(error.message);
      }
    }
  });
  return newArgStrings;
};

ArgumentParser.prototype.convertArgLineToArgs = function (argLine) {
  return [ argLine ];
};

ArgumentParser.prototype._matchArgument = function (action, regexpArgStrings) {

  // match the pattern for this action to the arg strings
  var regexpNargs = new RegExp('^' + this._getNargsPattern(action));
  var matches = regexpArgStrings.match(regexpNargs);
  var message;

  // throw an exception if we weren't able to find a match
  if (!matches) {
    switch (action.nargs) {
      /*eslint-disable no-undefined*/
      case undefined:
      case null:
        message = 'Expected one argument.';
        break;
      case c.OPTIONAL:
        message = 'Expected at most one argument.';
        break;
      case c.ONE_OR_MORE:
        message = 'Expected at least one argument.';
        break;
      default:
        message = 'Expected %s argument(s)';
    }

    throw argumentErrorHelper(
      action,
      format(message, action.nargs)
    );
  }
  // return the number of arguments matched
  return matches[1].length;
};

ArgumentParser.prototype._matchArgumentsPartial = function (actions, regexpArgStrings) {
  // progressively shorten the actions list by slicing off the
  // final actions until we find a match
  var self = this;
  var result = [];
  var actionSlice, pattern, matches;
  var i, j;

  function getLength(string) {
    return string.length;
  }

  for (i = actions.length; i > 0; i--) {
    pattern = '';
    actionSlice = actions.slice(0, i);
    for (j = 0; j < actionSlice.length; j++) {
      pattern += self._getNargsPattern(actionSlice[j]);
    }

    pattern = new RegExp('^' + pattern);
    matches = regexpArgStrings.match(pattern);

    if (matches && matches.length > 0) {
      // need only groups
      matches = matches.splice(1);
      result = result.concat(matches.map(getLength));
      break;
    }
  }

  // return the list of arg string counts
  return result;
};

ArgumentParser.prototype._parseOptional = function (argString) {
  var action, optionString, argExplicit, optionTuples;

  // if it's an empty string, it was meant to be a positional
  if (!argString) {
    return null;
  }

  // if it doesn't start with a prefix, it was meant to be positional
  if (this.prefixChars.indexOf(argString[0]) < 0) {
    return null;
  }

  // if the option string is present in the parser, return the action
  if (this._optionStringActions[argString]) {
    return [ this._optionStringActions[argString], argString, null ];
  }

  // if it's just a single character, it was meant to be positional
  if (argString.length === 1) {
    return null;
  }

  // if the option string before the "=" is present, return the action
  if (argString.indexOf('=') >= 0) {
    optionString = argString.split('=', 1)[0];
    argExplicit = argString.slice(optionString.length + 1);

    if (this._optionStringActions[optionString]) {
      action = this._optionStringActions[optionString];
      return [ action, optionString, argExplicit ];
    }
  }

  // search through all possible prefixes of the option string
  // and all actions in the parser for possible interpretations
  optionTuples = this._getOptionTuples(argString);

  // if multiple actions match, the option string was ambiguous
  if (optionTuples.length > 1) {
    var optionStrings = optionTuples.map(function (optionTuple) {
      return optionTuple[1];
    });
    this.error(format(
          'Ambiguous option: "%s" could match %s.',
          argString, optionStrings.join(', ')
    ));
  // if exactly one action matched, this segmentation is good,
  // so return the parsed action
  } else if (optionTuples.length === 1) {
    return optionTuples[0];
  }

  // if it was not found as an option, but it looks like a negative
  // number, it was meant to be positional
  // unless there are negative-number-like options
  if (argString.match(this._regexpNegativeNumber)) {
    if (!this._hasNegativeNumberOptionals.some(Boolean)) {
      return null;
    }
  }
  // if it contains a space, it was meant to be a positional
  if (argString.search(' ') >= 0) {
    return null;
  }

  // it was meant to be an optional but there is no such option
  // in this parser (though it might be a valid option in a subparser)
  return [ null, argString, null ];
};

ArgumentParser.prototype._getOptionTuples = function (optionString) {
  var result = [];
  var chars = this.prefixChars;
  var optionPrefix;
  var argExplicit;
  var action;
  var actionOptionString;

  // option strings starting with two prefix characters are only split at
  // the '='
  if (chars.indexOf(optionString[0]) >= 0 && chars.indexOf(optionString[1]) >= 0) {
    if (optionString.indexOf('=') >= 0) {
      var optionStringSplit = optionString.split('=', 1);

      optionPrefix = optionStringSplit[0];
      argExplicit = optionStringSplit[1];
    } else {
      optionPrefix = optionString;
      argExplicit = null;
    }

    for (actionOptionString in this._optionStringActions) {
      if (actionOptionString.substr(0, optionPrefix.length) === optionPrefix) {
        action = this._optionStringActions[actionOptionString];
        result.push([ action, actionOptionString, argExplicit ]);
      }
    }

  // single character options can be concatenated with their arguments
  // but multiple character options always have to have their argument
  // separate
  } else if (chars.indexOf(optionString[0]) >= 0 && chars.indexOf(optionString[1]) < 0) {
    optionPrefix = optionString;
    argExplicit = null;
    var optionPrefixShort = optionString.substr(0, 2);
    var argExplicitShort = optionString.substr(2);

    for (actionOptionString in this._optionStringActions) {
      if (!$$.has(this._optionStringActions, actionOptionString)) continue;

      action = this._optionStringActions[actionOptionString];
      if (actionOptionString === optionPrefixShort) {
        result.push([ action, actionOptionString, argExplicitShort ]);
      } else if (actionOptionString.substr(0, optionPrefix.length) === optionPrefix) {
        result.push([ action, actionOptionString, argExplicit ]);
      }
    }

  // shouldn't ever get here
  } else {
    throw new Error(format('Unexpected option string: %s.', optionString));
  }
  // return the collected option tuples
  return result;
};

ArgumentParser.prototype._getNargsPattern = function (action) {
  // in all examples below, we have to allow for '--' args
  // which are represented as '-' in the pattern
  var regexpNargs;

  switch (action.nargs) {
    // the default (null) is assumed to be a single argument
    case undefined:
    case null:
      regexpNargs = '(-*A-*)';
      break;
    // allow zero or more arguments
    case c.OPTIONAL:
      regexpNargs = '(-*A?-*)';
      break;
    // allow zero or more arguments
    case c.ZERO_OR_MORE:
      regexpNargs = '(-*[A-]*)';
      break;
    // allow one or more arguments
    case c.ONE_OR_MORE:
      regexpNargs = '(-*A[A-]*)';
      break;
    // allow any number of options or arguments
    case c.REMAINDER:
      regexpNargs = '([-AO]*)';
      break;
    // allow one argument followed by any number of options or arguments
    case c.PARSER:
      regexpNargs = '(-*A[-AO]*)';
      break;
    // all others should be integers
    default:
      regexpNargs = '(-*' + $$.repeat('-*A', action.nargs) + '-*)';
  }

  // if this is an optional action, -- is not allowed
  if (action.isOptional()) {
    regexpNargs = regexpNargs.replace(/-\*/g, '');
    regexpNargs = regexpNargs.replace(/-/g, '');
  }

  // return the pattern
  return regexpNargs;
};

//
// Value conversion methods
//

ArgumentParser.prototype._getValues = function (action, argStrings) {
  var self = this;

  // for everything but PARSER args, strip out '--'
  if (action.nargs !== c.PARSER && action.nargs !== c.REMAINDER) {
    argStrings = argStrings.filter(function (arrayElement) {
      return arrayElement !== '--';
    });
  }

  var value, argString;

  // optional argument produces a default when not present
  if (argStrings.length === 0 && action.nargs === c.OPTIONAL) {

    value = (action.isOptional()) ? action.constant : action.defaultValue;

    if (typeof (value) === 'string') {
      value = this._getValue(action, value);
      this._checkValue(action, value);
    }

  // when nargs='*' on a positional, if there were no command-line
  // args, use the default if it is anything other than None
  } else if (argStrings.length === 0 && action.nargs === c.ZERO_OR_MORE &&
    action.optionStrings.length === 0) {

    value = (action.defaultValue || argStrings);
    this._checkValue(action, value);

  // single argument or optional argument produces a single value
  } else if (argStrings.length === 1 &&
        (!action.nargs || action.nargs === c.OPTIONAL)) {

    argString = argStrings[0];
    value = this._getValue(action, argString);
    this._checkValue(action, value);

  // REMAINDER arguments convert all values, checking none
  } else if (action.nargs === c.REMAINDER) {
    value = argStrings.map(function (v) {
      return self._getValue(action, v);
    });

  // PARSER arguments convert all values, but check only the first
  } else if (action.nargs === c.PARSER) {
    value = argStrings.map(function (v) {
      return self._getValue(action, v);
    });
    this._checkValue(action, value[0]);

  // all other types of nargs produce a list
  } else {
    value = argStrings.map(function (v) {
      return self._getValue(action, v);
    });
    value.forEach(function (v) {
      self._checkValue(action, v);
    });
  }

  // return the converted value
  return value;
};

ArgumentParser.prototype._getValue = function (action, argString) {
  var result;

  var typeFunction = this._registryGet('type', action.type, action.type);
  if (typeof typeFunction !== 'function') {
    var message = format('%s is not callable', typeFunction);
    throw argumentErrorHelper(action, message);
  }

  // convert the value to the appropriate type
  try {
    result = typeFunction(argString);

    // ArgumentTypeErrors indicate errors
    // If action.type is not a registered string, it is a function
    // Try to deduce its name for inclusion in the error message
    // Failing that, include the error message it raised.
  } catch (e) {
    var name = null;
    if (typeof action.type === 'string') {
      name = action.type;
    } else {
      name = action.type.name || action.type.displayName || '<function>';
    }
    var msg = format('Invalid %s value: %s', name, argString);
    if (name === '<function>') { msg += '\n' + e.message; }
    throw argumentErrorHelper(action, msg);
  }
  // return the converted value
  return result;
};

ArgumentParser.prototype._checkValue = function (action, value) {
  // converted value must be one of the choices (if specified)
  var choices = action.choices;
  if (choices) {
    // choise for argument can by array or string
    if ((typeof choices === 'string' || Array.isArray(choices)) &&
        choices.indexOf(value) !== -1) {
      return;
    }
    // choise for subparsers can by only hash
    if (typeof choices === 'object' && !Array.isArray(choices) && choices[value]) {
      return;
    }

    if (typeof choices === 'string') {
      choices = choices.split('').join(', ');
    } else if (Array.isArray(choices)) {
      choices =  choices.join(', ');
    } else {
      choices =  Object.keys(choices).join(', ');
    }
    var message = format('Invalid choice: %s (choose from [%s])', value, choices);
    throw argumentErrorHelper(action, message);
  }
};

//
// Help formatting methods
//

/**
 * ArgumentParser#formatUsage -> string
 *
 * Return usage string
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#printing-help
 **/
ArgumentParser.prototype.formatUsage = function () {
  var formatter = this._getFormatter();
  formatter.addUsage(this.usage, this._actions, this._mutuallyExclusiveGroups);
  return formatter.formatHelp();
};

/**
 * ArgumentParser#formatHelp -> string
 *
 * Return help
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#printing-help
 **/
ArgumentParser.prototype.formatHelp = function () {
  var formatter = this._getFormatter();

  // usage
  formatter.addUsage(this.usage, this._actions, this._mutuallyExclusiveGroups);

  // description
  formatter.addText(this.description);

  // positionals, optionals and user-defined groups
  this._actionGroups.forEach(function (actionGroup) {
    formatter.startSection(actionGroup.title);
    formatter.addText(actionGroup.description);
    formatter.addArguments(actionGroup._groupActions);
    formatter.endSection();
  });

  // epilog
  formatter.addText(this.epilog);

  // determine help from format above
  return formatter.formatHelp();
};

ArgumentParser.prototype._getFormatter = function () {
  var FormatterClass = this.formatterClass;
  var formatter = new FormatterClass({ prog: this.prog });
  return formatter;
};

//
//  Print functions
//

/**
 * ArgumentParser#printUsage() -> Void
 *
 * Print usage
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#printing-help
 **/
ArgumentParser.prototype.printUsage = function () {
  this._printMessage(this.formatUsage());
};

/**
 * ArgumentParser#printHelp() -> Void
 *
 * Print help
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#printing-help
 **/
ArgumentParser.prototype.printHelp = function () {
  this._printMessage(this.formatHelp());
};

ArgumentParser.prototype._printMessage = function (message, stream) {
  if (!stream) {
    stream = process.stdout;
  }
  if (message) {
    stream.write('' + message);
  }
};

//
//  Exit functions
//

/**
 * ArgumentParser#exit(status=0, message) -> Void
 * - status (int): exit status
 * - message (string): message
 *
 * Print message in stderr/stdout and exit program
 **/
ArgumentParser.prototype.exit = function (status, message) {
  if (message) {
    if (status === 0) {
      this._printMessage(message);
    } else {
      this._printMessage(message, process.stderr);
    }
  }

  process.exit(status);
};

/**
 * ArgumentParser#error(message) -> Void
 * - err (Error|string): message
 *
 * Error method Prints a usage message incorporating the message to stderr and
 * exits. If you override this in a subclass,
 * it should not return -- it should
 * either exit or throw an exception.
 *
 **/
ArgumentParser.prototype.error = function (err) {
  var message;
  if (err instanceof Error) {
    if (this.debug === true) {
      throw err;
    }
    message = err.message;
  } else {
    message = err;
  }
  var msg = format('%s: error: %s', this.prog, message) + c.EOL;

  if (this.debug === true) {
    throw new Error(msg);
  }

  this.printUsage(process.stderr);

  return this.exit(2, msg);
};

module.exports = ArgumentParser;


/***/ }),

/***/ "./node_modules/argparse/lib/const.js":
/*!********************************************!*\
  !*** ./node_modules/argparse/lib/const.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
// Constants
//



module.exports.EOL = '\n';

module.exports.SUPPRESS = '==SUPPRESS==';

module.exports.OPTIONAL = '?';

module.exports.ZERO_OR_MORE = '*';

module.exports.ONE_OR_MORE = '+';

module.exports.PARSER = 'A...';

module.exports.REMAINDER = '...';

module.exports._UNRECOGNIZED_ARGS_ATTR = '_unrecognized_args';


/***/ }),

/***/ "./node_modules/argparse/lib/help/added_formatters.js":
/*!************************************************************!*\
  !*** ./node_modules/argparse/lib/help/added_formatters.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util    = __webpack_require__(/*! util */ "util");

// Constants
var c = __webpack_require__(/*! ../const */ "./node_modules/argparse/lib/const.js");

var $$ = __webpack_require__(/*! ../utils */ "./node_modules/argparse/lib/utils.js");
var HelpFormatter = __webpack_require__(/*! ./formatter.js */ "./node_modules/argparse/lib/help/formatter.js");

/**
 * new RawDescriptionHelpFormatter(options)
 * new ArgumentParser({formatterClass: argparse.RawDescriptionHelpFormatter, ...})
 *
 * Help message formatter which adds default values to argument help.
 *
 * Only the name of this class is considered a public API. All the methods
 * provided by the class are considered an implementation detail.
 **/

function ArgumentDefaultsHelpFormatter(options) {
  HelpFormatter.call(this, options);
}

util.inherits(ArgumentDefaultsHelpFormatter, HelpFormatter);

ArgumentDefaultsHelpFormatter.prototype._getHelpString = function (action) {
  var help = action.help;
  if (action.help.indexOf('%(defaultValue)s') === -1) {
    if (action.defaultValue !== c.SUPPRESS) {
      var defaulting_nargs = [ c.OPTIONAL, c.ZERO_OR_MORE ];
      if (action.isOptional() || (defaulting_nargs.indexOf(action.nargs) >= 0)) {
        help += ' (default: %(defaultValue)s)';
      }
    }
  }
  return help;
};

module.exports.ArgumentDefaultsHelpFormatter = ArgumentDefaultsHelpFormatter;

/**
 * new RawDescriptionHelpFormatter(options)
 * new ArgumentParser({formatterClass: argparse.RawDescriptionHelpFormatter, ...})
 *
 * Help message formatter which retains any formatting in descriptions.
 *
 * Only the name of this class is considered a public API. All the methods
 * provided by the class are considered an implementation detail.
 **/

function RawDescriptionHelpFormatter(options) {
  HelpFormatter.call(this, options);
}

util.inherits(RawDescriptionHelpFormatter, HelpFormatter);

RawDescriptionHelpFormatter.prototype._fillText = function (text, width, indent) {
  var lines = text.split('\n');
  lines = lines.map(function (line) {
    return $$.trimEnd(indent + line);
  });
  return lines.join('\n');
};
module.exports.RawDescriptionHelpFormatter = RawDescriptionHelpFormatter;

/**
 * new RawTextHelpFormatter(options)
 * new ArgumentParser({formatterClass: argparse.RawTextHelpFormatter, ...})
 *
 * Help message formatter which retains formatting of all help text.
 *
 * Only the name of this class is considered a public API. All the methods
 * provided by the class are considered an implementation detail.
 **/

function RawTextHelpFormatter(options) {
  RawDescriptionHelpFormatter.call(this, options);
}

util.inherits(RawTextHelpFormatter, RawDescriptionHelpFormatter);

RawTextHelpFormatter.prototype._splitLines = function (text) {
  return text.split('\n');
};

module.exports.RawTextHelpFormatter = RawTextHelpFormatter;


/***/ }),

/***/ "./node_modules/argparse/lib/help/formatter.js":
/*!*****************************************************!*\
  !*** ./node_modules/argparse/lib/help/formatter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * class HelpFormatter
 *
 * Formatter for generating usage messages and argument help strings. Only the
 * name of this class is considered a public API. All the methods provided by
 * the class are considered an implementation detail.
 *
 * Do not call in your code, use this class only for inherits your own forvatter
 *
 * ToDo add [additonal formatters][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#formatter-class
 **/


var sprintf = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js").sprintf;

// Constants
var c = __webpack_require__(/*! ../const */ "./node_modules/argparse/lib/const.js");

var $$ = __webpack_require__(/*! ../utils */ "./node_modules/argparse/lib/utils.js");


/*:nodoc:* internal
 * new Support(parent, heding)
 * - parent (object): parent section
 * - heading (string): header string
 *
 **/
function Section(parent, heading) {
  this._parent = parent;
  this._heading = heading;
  this._items = [];
}

/*:nodoc:* internal
 * Section#addItem(callback) -> Void
 * - callback (array): tuple with function and args
 *
 * Add function for single element
 **/
Section.prototype.addItem = function (callback) {
  this._items.push(callback);
};

/*:nodoc:* internal
 * Section#formatHelp(formatter) -> string
 * - formatter (HelpFormatter): current formatter
 *
 * Form help section string
 *
 **/
Section.prototype.formatHelp = function (formatter) {
  var itemHelp, heading;

  // format the indented section
  if (this._parent) {
    formatter._indent();
  }

  itemHelp = this._items.map(function (item) {
    var obj, func, args;

    obj = formatter;
    func = item[0];
    args = item[1];
    return func.apply(obj, args);
  });
  itemHelp = formatter._joinParts(itemHelp);

  if (this._parent) {
    formatter._dedent();
  }

  // return nothing if the section was empty
  if (!itemHelp) {
    return '';
  }

  // add the heading if the section was non-empty
  heading = '';
  if (this._heading && this._heading !== c.SUPPRESS) {
    var currentIndent = formatter.currentIndent;
    heading = $$.repeat(' ', currentIndent) + this._heading + ':' + c.EOL;
  }

  // join the section-initialize newline, the heading and the help
  return formatter._joinParts([ c.EOL, heading, itemHelp, c.EOL ]);
};

/**
 * new HelpFormatter(options)
 *
 * #### Options:
 * - `prog`: program name
 * - `indentIncriment`: indent step, default value 2
 * - `maxHelpPosition`: max help position, default value = 24
 * - `width`: line width
 *
 **/
var HelpFormatter = module.exports = function HelpFormatter(options) {
  options = options || {};

  this._prog = options.prog;

  this._maxHelpPosition = options.maxHelpPosition || 24;
  this._width = (options.width || ((process.env.COLUMNS || 80) - 2));

  this._currentIndent = 0;
  this._indentIncriment = options.indentIncriment || 2;
  this._level = 0;
  this._actionMaxLength = 0;

  this._rootSection = new Section(null);
  this._currentSection = this._rootSection;

  this._whitespaceMatcher = new RegExp('\\s+', 'g');
  this._longBreakMatcher = new RegExp(c.EOL + c.EOL + c.EOL + '+', 'g');
};

HelpFormatter.prototype._indent = function () {
  this._currentIndent += this._indentIncriment;
  this._level += 1;
};

HelpFormatter.prototype._dedent = function () {
  this._currentIndent -= this._indentIncriment;
  this._level -= 1;
  if (this._currentIndent < 0) {
    throw new Error('Indent decreased below 0.');
  }
};

HelpFormatter.prototype._addItem = function (func, args) {
  this._currentSection.addItem([ func, args ]);
};

//
// Message building methods
//

/**
 * HelpFormatter#startSection(heading) -> Void
 * - heading (string): header string
 *
 * Start new help section
 *
 * See alse [code example][1]
 *
 * ##### Example
 *
 *      formatter.startSection(actionGroup.title);
 *      formatter.addText(actionGroup.description);
 *      formatter.addArguments(actionGroup._groupActions);
 *      formatter.endSection();
 *
 **/
HelpFormatter.prototype.startSection = function (heading) {
  this._indent();
  var section = new Section(this._currentSection, heading);
  var func = section.formatHelp.bind(section);
  this._addItem(func, [ this ]);
  this._currentSection = section;
};

/**
 * HelpFormatter#endSection -> Void
 *
 * End help section
 *
 * ##### Example
 *
 *      formatter.startSection(actionGroup.title);
 *      formatter.addText(actionGroup.description);
 *      formatter.addArguments(actionGroup._groupActions);
 *      formatter.endSection();
 **/
HelpFormatter.prototype.endSection = function () {
  this._currentSection = this._currentSection._parent;
  this._dedent();
};

/**
 * HelpFormatter#addText(text) -> Void
 * - text (string): plain text
 *
 * Add plain text into current section
 *
 * ##### Example
 *
 *      formatter.startSection(actionGroup.title);
 *      formatter.addText(actionGroup.description);
 *      formatter.addArguments(actionGroup._groupActions);
 *      formatter.endSection();
 *
 **/
HelpFormatter.prototype.addText = function (text) {
  if (text && text !== c.SUPPRESS) {
    this._addItem(this._formatText, [ text ]);
  }
};

/**
 * HelpFormatter#addUsage(usage, actions, groups, prefix) -> Void
 * - usage (string): usage text
 * - actions (array): actions list
 * - groups (array): groups list
 * - prefix (string): usage prefix
 *
 * Add usage data into current section
 *
 * ##### Example
 *
 *      formatter.addUsage(this.usage, this._actions, []);
 *      return formatter.formatHelp();
 *
 **/
HelpFormatter.prototype.addUsage = function (usage, actions, groups, prefix) {
  if (usage !== c.SUPPRESS) {
    this._addItem(this._formatUsage, [ usage, actions, groups, prefix ]);
  }
};

/**
 * HelpFormatter#addArgument(action) -> Void
 * - action (object): action
 *
 * Add argument into current section
 *
 * Single variant of [[HelpFormatter#addArguments]]
 **/
HelpFormatter.prototype.addArgument = function (action) {
  if (action.help !== c.SUPPRESS) {
    var self = this;

    // find all invocations
    var invocations = [ this._formatActionInvocation(action) ];
    var invocationLength = invocations[0].length;

    var actionLength;

    if (action._getSubactions) {
      this._indent();
      action._getSubactions().forEach(function (subaction) {

        var invocationNew = self._formatActionInvocation(subaction);
        invocations.push(invocationNew);
        invocationLength = Math.max(invocationLength, invocationNew.length);

      });
      this._dedent();
    }

    // update the maximum item length
    actionLength = invocationLength + this._currentIndent;
    this._actionMaxLength = Math.max(this._actionMaxLength, actionLength);

    // add the item to the list
    this._addItem(this._formatAction, [ action ]);
  }
};

/**
 * HelpFormatter#addArguments(actions) -> Void
 * - actions (array): actions list
 *
 * Mass add arguments into current section
 *
 * ##### Example
 *
 *      formatter.startSection(actionGroup.title);
 *      formatter.addText(actionGroup.description);
 *      formatter.addArguments(actionGroup._groupActions);
 *      formatter.endSection();
 *
 **/
HelpFormatter.prototype.addArguments = function (actions) {
  var self = this;
  actions.forEach(function (action) {
    self.addArgument(action);
  });
};

//
// Help-formatting methods
//

/**
 * HelpFormatter#formatHelp -> string
 *
 * Format help
 *
 * ##### Example
 *
 *      formatter.addText(this.epilog);
 *      return formatter.formatHelp();
 *
 **/
HelpFormatter.prototype.formatHelp = function () {
  var help = this._rootSection.formatHelp(this);
  if (help) {
    help = help.replace(this._longBreakMatcher, c.EOL + c.EOL);
    help = $$.trimChars(help, c.EOL) + c.EOL;
  }
  return help;
};

HelpFormatter.prototype._joinParts = function (partStrings) {
  return partStrings.filter(function (part) {
    return (part && part !== c.SUPPRESS);
  }).join('');
};

HelpFormatter.prototype._formatUsage = function (usage, actions, groups, prefix) {
  if (!prefix && typeof prefix !== 'string') {
    prefix = 'usage: ';
  }

  actions = actions || [];
  groups = groups || [];


  // if usage is specified, use that
  if (usage) {
    usage = sprintf(usage, { prog: this._prog });

    // if no optionals or positionals are available, usage is just prog
  } else if (!usage && actions.length === 0) {
    usage = this._prog;

    // if optionals and positionals are available, calculate usage
  } else if (!usage) {
    var prog = this._prog;
    var optionals = [];
    var positionals = [];
    var actionUsage;
    var textWidth;

    // split optionals from positionals
    actions.forEach(function (action) {
      if (action.isOptional()) {
        optionals.push(action);
      } else {
        positionals.push(action);
      }
    });

    // build full usage string
    actionUsage = this._formatActionsUsage([].concat(optionals, positionals), groups);
    usage = [ prog, actionUsage ].join(' ');

    // wrap the usage parts if it's too long
    textWidth = this._width - this._currentIndent;
    if ((prefix.length + usage.length) > textWidth) {

      // break usage into wrappable parts
      var regexpPart = new RegExp('\\(.*?\\)+|\\[.*?\\]+|\\S+', 'g');
      var optionalUsage = this._formatActionsUsage(optionals, groups);
      var positionalUsage = this._formatActionsUsage(positionals, groups);


      var optionalParts = optionalUsage.match(regexpPart);
      var positionalParts = positionalUsage.match(regexpPart) || [];

      if (optionalParts.join(' ') !== optionalUsage) {
        throw new Error('assert "optionalParts.join(\' \') === optionalUsage"');
      }
      if (positionalParts.join(' ') !== positionalUsage) {
        throw new Error('assert "positionalParts.join(\' \') === positionalUsage"');
      }

      // helper for wrapping lines
      /*eslint-disable func-style*/ // node 0.10 compat
      var _getLines = function (parts, indent, prefix) {
        var lines = [];
        var line = [];

        var lineLength = prefix ? prefix.length - 1 : indent.length - 1;

        parts.forEach(function (part) {
          if (lineLength + 1 + part.length > textWidth) {
            lines.push(indent + line.join(' '));
            line = [];
            lineLength = indent.length - 1;
          }
          line.push(part);
          lineLength += part.length + 1;
        });

        if (line) {
          lines.push(indent + line.join(' '));
        }
        if (prefix) {
          lines[0] = lines[0].substr(indent.length);
        }
        return lines;
      };

      var lines, indent, parts;
      // if prog is short, follow it with optionals or positionals
      if (prefix.length + prog.length <= 0.75 * textWidth) {
        indent = $$.repeat(' ', (prefix.length + prog.length + 1));
        if (optionalParts) {
          lines = [].concat(
            _getLines([ prog ].concat(optionalParts), indent, prefix),
            _getLines(positionalParts, indent)
          );
        } else if (positionalParts) {
          lines = _getLines([ prog ].concat(positionalParts), indent, prefix);
        } else {
          lines = [ prog ];
        }

        // if prog is long, put it on its own line
      } else {
        indent = $$.repeat(' ', prefix.length);
        parts = optionalParts.concat(positionalParts);
        lines = _getLines(parts, indent);
        if (lines.length > 1) {
          lines = [].concat(
            _getLines(optionalParts, indent),
            _getLines(positionalParts, indent)
          );
        }
        lines = [ prog ].concat(lines);
      }
      // join lines into usage
      usage = lines.join(c.EOL);
    }
  }

  // prefix with 'usage:'
  return prefix + usage + c.EOL + c.EOL;
};

HelpFormatter.prototype._formatActionsUsage = function (actions, groups) {
  // find group indices and identify actions in groups
  var groupActions = [];
  var inserts = [];
  var self = this;

  groups.forEach(function (group) {
    var end;
    var i;

    var start = actions.indexOf(group._groupActions[0]);
    if (start >= 0) {
      end = start + group._groupActions.length;

      //if (actions.slice(start, end) === group._groupActions) {
      if ($$.arrayEqual(actions.slice(start, end), group._groupActions)) {
        group._groupActions.forEach(function (action) {
          groupActions.push(action);
        });

        if (!group.required) {
          if (inserts[start]) {
            inserts[start] += ' [';
          } else {
            inserts[start] = '[';
          }
          inserts[end] = ']';
        } else {
          if (inserts[start]) {
            inserts[start] += ' (';
          } else {
            inserts[start] = '(';
          }
          inserts[end] = ')';
        }
        for (i = start + 1; i < end; i += 1) {
          inserts[i] = '|';
        }
      }
    }
  });

  // collect all actions format strings
  var parts = [];

  actions.forEach(function (action, actionIndex) {
    var part;
    var optionString;
    var argsDefault;
    var argsString;

    // suppressed arguments are marked with None
    // remove | separators for suppressed arguments
    if (action.help === c.SUPPRESS) {
      parts.push(null);
      if (inserts[actionIndex] === '|') {
        inserts.splice(actionIndex, actionIndex);
      } else if (inserts[actionIndex + 1] === '|') {
        inserts.splice(actionIndex + 1, actionIndex + 1);
      }

      // produce all arg strings
    } else if (!action.isOptional()) {
      part = self._formatArgs(action, action.dest);

      // if it's in a group, strip the outer []
      if (groupActions.indexOf(action) >= 0) {
        if (part[0] === '[' && part[part.length - 1] === ']') {
          part = part.slice(1, -1);
        }
      }
      // add the action string to the list
      parts.push(part);

    // produce the first way to invoke the option in brackets
    } else {
      optionString = action.optionStrings[0];

      // if the Optional doesn't take a value, format is: -s or --long
      if (action.nargs === 0) {
        part = '' + optionString;

      // if the Optional takes a value, format is: -s ARGS or --long ARGS
      } else {
        argsDefault = action.dest.toUpperCase();
        argsString = self._formatArgs(action, argsDefault);
        part = optionString + ' ' + argsString;
      }
      // make it look optional if it's not required or in a group
      if (!action.required && groupActions.indexOf(action) < 0) {
        part = '[' + part + ']';
      }
      // add the action string to the list
      parts.push(part);
    }
  });

  // insert things at the necessary indices
  for (var i = inserts.length - 1; i >= 0; --i) {
    if (inserts[i] !== null) {
      parts.splice(i, 0, inserts[i]);
    }
  }

  // join all the action items with spaces
  var text = parts.filter(function (part) {
    return !!part;
  }).join(' ');

  // clean up separators for mutually exclusive groups
  text = text.replace(/([\[(]) /g, '$1'); // remove spaces
  text = text.replace(/ ([\])])/g, '$1');
  text = text.replace(/\[ *\]/g, ''); // remove empty groups
  text = text.replace(/\( *\)/g, '');
  text = text.replace(/\(([^|]*)\)/g, '$1'); // remove () from single action groups

  text = text.trim();

  // return the text
  return text;
};

HelpFormatter.prototype._formatText = function (text) {
  text = sprintf(text, { prog: this._prog });
  var textWidth = this._width - this._currentIndent;
  var indentIncriment = $$.repeat(' ', this._currentIndent);
  return this._fillText(text, textWidth, indentIncriment) + c.EOL + c.EOL;
};

HelpFormatter.prototype._formatAction = function (action) {
  var self = this;

  var helpText;
  var helpLines;
  var parts;
  var indentFirst;

  // determine the required width and the entry label
  var helpPosition = Math.min(this._actionMaxLength + 2, this._maxHelpPosition);
  var helpWidth = this._width - helpPosition;
  var actionWidth = helpPosition - this._currentIndent - 2;
  var actionHeader = this._formatActionInvocation(action);

  // no help; start on same line and add a final newline
  if (!action.help) {
    actionHeader = $$.repeat(' ', this._currentIndent) + actionHeader + c.EOL;

  // short action name; start on the same line and pad two spaces
  } else if (actionHeader.length <= actionWidth) {
    actionHeader = $$.repeat(' ', this._currentIndent) +
        actionHeader +
        '  ' +
        $$.repeat(' ', actionWidth - actionHeader.length);
    indentFirst = 0;

  // long action name; start on the next line
  } else {
    actionHeader = $$.repeat(' ', this._currentIndent) + actionHeader + c.EOL;
    indentFirst = helpPosition;
  }

  // collect the pieces of the action help
  parts = [ actionHeader ];

  // if there was help for the action, add lines of help text
  if (action.help) {
    helpText = this._expandHelp(action);
    helpLines = this._splitLines(helpText, helpWidth);
    parts.push($$.repeat(' ', indentFirst) + helpLines[0] + c.EOL);
    helpLines.slice(1).forEach(function (line) {
      parts.push($$.repeat(' ', helpPosition) + line + c.EOL);
    });

  // or add a newline if the description doesn't end with one
  } else if (actionHeader.charAt(actionHeader.length - 1) !== c.EOL) {
    parts.push(c.EOL);
  }
  // if there are any sub-actions, add their help as well
  if (action._getSubactions) {
    this._indent();
    action._getSubactions().forEach(function (subaction) {
      parts.push(self._formatAction(subaction));
    });
    this._dedent();
  }
  // return a single string
  return this._joinParts(parts);
};

HelpFormatter.prototype._formatActionInvocation = function (action) {
  if (!action.isOptional()) {
    var format_func = this._metavarFormatter(action, action.dest);
    var metavars = format_func(1);
    return metavars[0];
  }

  var parts = [];
  var argsDefault;
  var argsString;

  // if the Optional doesn't take a value, format is: -s, --long
  if (action.nargs === 0) {
    parts = parts.concat(action.optionStrings);

  // if the Optional takes a value, format is: -s ARGS, --long ARGS
  } else {
    argsDefault = action.dest.toUpperCase();
    argsString = this._formatArgs(action, argsDefault);
    action.optionStrings.forEach(function (optionString) {
      parts.push(optionString + ' ' + argsString);
    });
  }
  return parts.join(', ');
};

HelpFormatter.prototype._metavarFormatter = function (action, metavarDefault) {
  var result;

  if (action.metavar || action.metavar === '') {
    result = action.metavar;
  } else if (action.choices) {
    var choices = action.choices;

    if (typeof choices === 'string') {
      choices = choices.split('').join(', ');
    } else if (Array.isArray(choices)) {
      choices = choices.join(',');
    } else {
      choices = Object.keys(choices).join(',');
    }
    result = '{' + choices + '}';
  } else {
    result = metavarDefault;
  }

  return function (size) {
    if (Array.isArray(result)) {
      return result;
    }

    var metavars = [];
    for (var i = 0; i < size; i += 1) {
      metavars.push(result);
    }
    return metavars;
  };
};

HelpFormatter.prototype._formatArgs = function (action, metavarDefault) {
  var result;
  var metavars;

  var buildMetavar = this._metavarFormatter(action, metavarDefault);

  switch (action.nargs) {
    /*eslint-disable no-undefined*/
    case undefined:
    case null:
      metavars = buildMetavar(1);
      result = '' + metavars[0];
      break;
    case c.OPTIONAL:
      metavars = buildMetavar(1);
      result = '[' + metavars[0] + ']';
      break;
    case c.ZERO_OR_MORE:
      metavars = buildMetavar(2);
      result = '[' + metavars[0] + ' [' + metavars[1] + ' ...]]';
      break;
    case c.ONE_OR_MORE:
      metavars = buildMetavar(2);
      result = '' + metavars[0] + ' [' + metavars[1] + ' ...]';
      break;
    case c.REMAINDER:
      result = '...';
      break;
    case c.PARSER:
      metavars = buildMetavar(1);
      result = metavars[0] + ' ...';
      break;
    default:
      metavars = buildMetavar(action.nargs);
      result = metavars.join(' ');
  }
  return result;
};

HelpFormatter.prototype._expandHelp = function (action) {
  var params = { prog: this._prog };

  Object.keys(action).forEach(function (actionProperty) {
    var actionValue = action[actionProperty];

    if (actionValue !== c.SUPPRESS) {
      params[actionProperty] = actionValue;
    }
  });

  if (params.choices) {
    if (typeof params.choices === 'string') {
      params.choices = params.choices.split('').join(', ');
    } else if (Array.isArray(params.choices)) {
      params.choices = params.choices.join(', ');
    } else {
      params.choices = Object.keys(params.choices).join(', ');
    }
  }

  return sprintf(this._getHelpString(action), params);
};

HelpFormatter.prototype._splitLines = function (text, width) {
  var lines = [];
  var delimiters = [ ' ', '.', ',', '!', '?' ];
  var re = new RegExp('[' + delimiters.join('') + '][^' + delimiters.join('') + ']*$');

  text = text.replace(/[\n\|\t]/g, ' ');

  text = text.trim();
  text = text.replace(this._whitespaceMatcher, ' ');

  // Wraps the single paragraph in text (a string) so every line
  // is at most width characters long.
  text.split(c.EOL).forEach(function (line) {
    if (width >= line.length) {
      lines.push(line);
      return;
    }

    var wrapStart = 0;
    var wrapEnd = width;
    var delimiterIndex = 0;
    while (wrapEnd <= line.length) {
      if (wrapEnd !== line.length && delimiters.indexOf(line[wrapEnd] < -1)) {
        delimiterIndex = (re.exec(line.substring(wrapStart, wrapEnd)) || {}).index;
        wrapEnd = wrapStart + delimiterIndex + 1;
      }
      lines.push(line.substring(wrapStart, wrapEnd));
      wrapStart = wrapEnd;
      wrapEnd += width;
    }
    if (wrapStart < line.length) {
      lines.push(line.substring(wrapStart, wrapEnd));
    }
  });

  return lines;
};

HelpFormatter.prototype._fillText = function (text, width, indent) {
  var lines = this._splitLines(text, width);
  lines = lines.map(function (line) {
    return indent + line;
  });
  return lines.join(c.EOL);
};

HelpFormatter.prototype._getHelpString = function (action) {
  return action.help;
};


/***/ }),

/***/ "./node_modules/argparse/lib/namespace.js":
/*!************************************************!*\
  !*** ./node_modules/argparse/lib/namespace.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * class Namespace
 *
 * Simple object for storing attributes. Implements equality by attribute names
 * and values, and provides a simple string representation.
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#the-namespace-object
 **/


var $$ = __webpack_require__(/*! ./utils */ "./node_modules/argparse/lib/utils.js");

/**
 * new Namespace(options)
 * - options(object): predefined propertis for result object
 *
 **/
var Namespace = module.exports = function Namespace(options) {
  $$.extend(this, options);
};

/**
 * Namespace#isset(key) -> Boolean
 * - key (string|number): property name
 *
 * Tells whenever `namespace` contains given `key` or not.
 **/
Namespace.prototype.isset = function (key) {
  return $$.has(this, key);
};

/**
 * Namespace#set(key, value) -> self
 * -key (string|number|object): propery name
 * -value (mixed): new property value
 *
 * Set the property named key with value.
 * If key object then set all key properties to namespace object
 **/
Namespace.prototype.set = function (key, value) {
  if (typeof (key) === 'object') {
    $$.extend(this, key);
  } else {
    this[key] = value;
  }
  return this;
};

/**
 * Namespace#get(key, defaultValue) -> mixed
 * - key (string|number): property name
 * - defaultValue (mixed): default value
 *
 * Return the property key or defaulValue if not set
 **/
Namespace.prototype.get = function (key, defaultValue) {
  return !this[key] ? defaultValue : this[key];
};

/**
 * Namespace#unset(key, defaultValue) -> mixed
 * - key (string|number): property name
 * - defaultValue (mixed): default value
 *
 * Return data[key](and delete it) or defaultValue
 **/
Namespace.prototype.unset = function (key, defaultValue) {
  var value = this[key];
  if (value !== null) {
    delete this[key];
    return value;
  }
  return defaultValue;
};


/***/ }),

/***/ "./node_modules/argparse/lib/utils.js":
/*!********************************************!*\
  !*** ./node_modules/argparse/lib/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.repeat = function (str, num) {
  var result = '';
  for (var i = 0; i < num; i++) { result += str; }
  return result;
};

exports.arrayEqual = function (a, b) {
  if (a.length !== b.length) { return false; }
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) { return false; }
  }
  return true;
};

exports.trimChars = function (str, chars) {
  var start = 0;
  var end = str.length - 1;
  while (chars.indexOf(str.charAt(start)) >= 0) { start++; }
  while (chars.indexOf(str.charAt(end)) >= 0) { end--; }
  return str.slice(start, end + 1);
};

exports.capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.arrayUnion = function () {
  var result = [];
  for (var i = 0, values = {}; i < arguments.length; i++) {
    var arr = arguments[i];
    for (var j = 0; j < arr.length; j++) {
      if (!values[arr[j]]) {
        values[arr[j]] = true;
        result.push(arr[j]);
      }
    }
  }
  return result;
};

function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.has = has;

exports.extend = function (dest, src) {
  for (var i in src) {
    if (has(src, i)) { dest[i] = src[i]; }
  }
};

exports.trimEnd = function (str) {
  return str.replace(/\s+$/g, '');
};


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/http.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/adapters/http.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var httpFollow = __webpack_require__(/*! follow-redirects */ "./node_modules/follow-redirects/index.js").http;
var httpsFollow = __webpack_require__(/*! follow-redirects */ "./node_modules/follow-redirects/index.js").https;
var url = __webpack_require__(/*! url */ "url");
var zlib = __webpack_require__(/*! zlib */ "zlib");
var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/axios/package.json");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var enhanceError = __webpack_require__(/*! ../core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolve, reject) {
    var data = config.data;
    var headers = config.headers;
    var timer;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = new Buffer(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = new Buffer(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var parsed = url.parse(config.url);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttps = protocol === 'https:';
    var agent = isHttps ? config.httpsAgent : config.httpAgent;

    var options = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method,
      headers: headers,
      agent: agent,
      auth: auth
    };

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        proxy = {
          host: parsedProxyUrl.hostname,
          port: parsedProxyUrl.port
        };

        if (parsedProxyUrl.auth) {
          var proxyUrlAuth = parsedProxyUrl.auth.split(':');
          proxy.auth = {
            username: proxyUrlAuth[0],
            password: proxyUrlAuth[1]
          };
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttps ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttps ? httpsFollow : httpFollow;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // Response has been received so kill timer that handles request timeout
      clearTimeout(timer);
      timer = null;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString('utf8');
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout && !timer) {
      timer = setTimeout(function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      }, config.timeout);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/http.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, bundlesize, dependencies, deprecated, description, devDependencies, homepage, keywords, license, main, name, repository, scripts, typings, version, default */
/***/ (function(module) {

module.exports = {"_from":"axios","_id":"axios@0.17.1","_inBundle":false,"_integrity":"sha1-LY4+XQvb1zJ/kbyBT1xXZg+Bgk0=","_location":"/axios","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"axios","name":"axios","escapedName":"axios","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.17.1.tgz","_shasum":"2d8e3e5d0bdbd7327f91bc814f5c57660f81824d","_spec":"axios","_where":"/home/tjscollins/CNMI PSS/codebases/cnmipss-main/contact-uploader","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundleDependencies":false,"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.2.5","is-buffer":"^1.1.5"},"deprecated":false,"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"bundlesize":"^0.5.7","coveralls":"^2.11.9","es6-promise":"^4.0.5","grunt":"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-phantomjs-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","phantomjs-prebuilt":"^2.1.7","sinon":"^1.17.4","typescript":"^2.0.3","url-search-params":"^0.6.1","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"homepage":"https://github.com/axios/axios","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test && bundlesize","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","version":"0.17.1"};

/***/ }),

/***/ "./node_modules/csv-parse/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/csv-parse/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 2.0.1
// # CSV Parser

// This module provides a CSV parser tested and used against large datasets. Over
// the year, it has been enhance and is now full of useful options.

// Please look at the [README], the [project website][site] the [samples] and the
// [tests] for additional information.
var Parser, StringDecoder, isObjLiteral, stream, util;

stream = __webpack_require__(/*! stream */ "stream");

util = __webpack_require__(/*! util */ "util");

StringDecoder = __webpack_require__(/*! string_decoder */ "string_decoder").StringDecoder;

// ## Usage

// Callback approach, for ease of use:   

// `parse(data, [options], callback)`     

// [Node.js Stream API][stream], for maximum of power:   

// `parse([options], [callback])`   
module.exports = function() {
  var callback, called, chunks, data, err, options, parser;
  if (arguments.length === 3) {
    data = arguments[0];
    options = arguments[1];
    callback = arguments[2];
    if (typeof callback !== 'function') {
      throw Error(`Invalid callback argument: ${JSON.stringify(callback)}`);
    }
    if (!(typeof data === 'string' || Buffer.isBuffer(arguments[0]))) {
      return callback(Error(`Invalid data argument: ${JSON.stringify(data)}`));
    }
  } else if (arguments.length === 2) {
    // 1st arg is data:string or options:object
    if (typeof arguments[0] === 'string' || Buffer.isBuffer(arguments[0])) {
      data = arguments[0];
    } else if (isObjLiteral(arguments[0])) {
      options = arguments[0];
    } else {
      err = `Invalid first argument: ${JSON.stringify(arguments[0])}`;
    }
    // 2nd arg is options:object or callback:function
    if (typeof arguments[1] === 'function') {
      callback = arguments[1];
    } else if (isObjLiteral(arguments[1])) {
      if (options) {
        err = 'Invalid arguments: got options twice as first and second arguments';
      } else {
        options = arguments[1];
      }
    } else {
      err = `Invalid first argument: ${JSON.stringify(arguments[1])}`;
    }
    if (err) {
      if (!callback) {
        throw Error(err);
      } else {
        return callback(Error(err));
      }
    }
  } else if (arguments.length === 1) {
    if (typeof arguments[0] === 'function') {
      callback = arguments[0];
    } else {
      options = arguments[0];
    }
  }
  if (options == null) {
    options = {};
  }
  parser = new Parser(options);
  if (data != null) {
    process.nextTick(function() {
      parser.write(data);
      return parser.end();
    });
  }
  if (callback) {
    called = false;
    chunks = options.objname ? {} : [];
    parser.on('readable', function() {
      var chunk, results;
      results = [];
      while (chunk = parser.read()) {
        if (options.objname) {
          results.push(chunks[chunk[0]] = chunk[1]);
        } else {
          results.push(chunks.push(chunk));
        }
      }
      return results;
    });
    parser.on('error', function(err) {
      called = true;
      return callback(err);
    });
    parser.on('end', function() {
      if (!called) {
        return callback(null, chunks);
      }
    });
  }
  return parser;
};

// ## `Parser([options])`

// Options are documented [here](http://csv.adaltas.com/parse/).
Parser = function(options = {}) {
  var base, base1, base10, base11, base12, base13, base14, base15, base16, base2, base3, base4, base5, base6, base7, base8, base9, k, v;
  // @options = options
  this.options = {};
  for (k in options) {
    v = options[k];
    this.options[k] = v;
  }
  this.options.objectMode = true;
  stream.Transform.call(this, this.options);
  if ((base = this.options).rowDelimiter == null) {
    base.rowDelimiter = null;
  }
  if (typeof this.options.rowDelimiter === 'string') {
    this.options.rowDelimiter = [this.options.rowDelimiter];
  }
  if ((base1 = this.options).delimiter == null) {
    base1.delimiter = ',';
  }
  if (this.options.quote !== void 0 && !this.options.quote) {
    this.options.quote = '';
  }
  if ((base2 = this.options).quote == null) {
    base2.quote = '"';
  }
  if ((base3 = this.options).escape == null) {
    base3.escape = '"';
  }
  if ((base4 = this.options).columns == null) {
    base4.columns = null;
  }
  if ((base5 = this.options).comment == null) {
    base5.comment = '';
  }
  if ((base6 = this.options).objname == null) {
    base6.objname = false;
  }
  if ((base7 = this.options).trim == null) {
    base7.trim = false;
  }
  if ((base8 = this.options).ltrim == null) {
    base8.ltrim = false;
  }
  if ((base9 = this.options).rtrim == null) {
    base9.rtrim = false;
  }
  if ((base10 = this.options).auto_parse == null) {
    base10.auto_parse = false;
  }
  if ((base11 = this.options).auto_parse_date == null) {
    base11.auto_parse_date = false;
  }
  if (this.options.auto_parse_date === true) {
    this.options.auto_parse_date = function(value) {
      var m;
      m = Date.parse(value);
      if (!isNaN(m)) {
        value = new Date(m);
      }
      return value;
    };
  }
  if ((base12 = this.options).relax == null) {
    base12.relax = false;
  }
  if ((base13 = this.options).relax_column_count == null) {
    base13.relax_column_count = false;
  }
  if ((base14 = this.options).skip_empty_lines == null) {
    base14.skip_empty_lines = false;
  }
  if ((base15 = this.options).max_limit_on_data_read == null) {
    base15.max_limit_on_data_read = 128000;
  }
  if ((base16 = this.options).skip_lines_with_empty_values == null) {
    base16.skip_lines_with_empty_values = false;
  }
  // Counters
  // lines = count + skipped_line_count + empty_line_count
  this.lines = 0; // Number of lines encountered in the source dataset
  this.count = 0; // Number of records being processed
  this.skipped_line_count = 0; // Number of records skipped due to errors
  this.empty_line_count = 0; // Number of empty lines
  // Constants
  this.is_int = /^(\-|\+)?([1-9]+[0-9]*)$/;
  // @is_float = /^(\-|\+)?([0-9]+(\.[0-9]+)([eE][0-9]+)?|Infinity)$/
  // @is_float = /^(\-|\+)?((([0-9])|([1-9]+[0-9]*))(\.[0-9]+)([eE][0-9]+)?|Infinity)$/
  this.is_float = function(value) {
    return (value - parseFloat(value) + 1) >= 0; // Borrowed from jquery
  };
  // Internal state
  this._ = {
    decoder: new StringDecoder(),
    quoting: false,
    commenting: false,
    field: null,
    nextChar: null,
    closingQuote: 0,
    line: [],
    chunks: [],
    rawBuf: '',
    buf: '',
    rowDelimiterLength: this.options.rowDelimiter ? Math.max(...this.options.rowDelimiter.map(function(v) {
      return v.length;
    })) : void 0
  };
  return this;
};

// ## Internal API

// The Parser implement a [`stream.Transform` class][transform].

// ### Events

// The library extends Node [EventEmitter][event] class and emit all
// the events of the Writable and Readable [Stream API][stream]. 
util.inherits(Parser, stream.Transform);

// For extra flexibility, you can get access to the original Parser
// class: `require('csv-parse').Parser`.
module.exports.Parser = Parser;

// ### `_transform(chunk, encoding, callback)`

// *   `chunk` Buffer | String   
//     The chunk to be transformed. Will always be a buffer unless the decodeStrings option was set to false.
// *   `encoding` String   
//     If the chunk is a string, then this is the encoding type. (Ignore if decodeStrings chunk is a buffer.)
// *   `callback` Function   
//     Call this function (optionally with an error argument) when you are done processing the supplied chunk.

// Implementation of the [`stream.Transform` API][transform]
Parser.prototype._transform = function(chunk, encoding, callback) {
  var err;
  if (chunk instanceof Buffer) {
    chunk = this._.decoder.write(chunk);
  }
  err = this.__write(chunk, false);
  if (err) {
    return this.emit('error', err);
  }
  return callback();
};

Parser.prototype._flush = function(callback) {
  var err;
  err = this.__write(this._.decoder.end(), true);
  if (err) {
    return this.emit('error', err);
  }
  if (this._.quoting) {
    this.emit('error', new Error(`Quoted field not terminated at line ${this.lines + 1}`));
    return;
  }
  if (this._.line.length > 0) {
    err = this.__push(this._.line);
    if (err) {
      return callback(err);
    }
  }
  return callback();
};

Parser.prototype.__push = function(line) {
  var call_column_udf, columns, err, field, i, j, len, lineAsColumns, rawBuf, row;
  if (this.options.skip_lines_with_empty_values && line.join('').trim() === '') {
    return;
  }
  row = null;
  if (this.options.columns === true) {
    this.options.columns = line;
    rawBuf = '';
    return;
  } else if (typeof this.options.columns === 'function') {
    call_column_udf = function(fn, line) {
      var columns, err;
      try {
        columns = fn.call(null, line);
        return [null, columns];
      } catch (error) {
        err = error;
        return [err];
      }
    };
    [err, columns] = call_column_udf(this.options.columns, line);
    if (err) {
      return err;
    }
    this.options.columns = columns;
    rawBuf = '';
    return;
  }
  if (!this._.line_length && line.length > 0) {
    this._.line_length = this.options.columns ? this.options.columns.length : line.length;
  }
  // Dont check column count on empty lines
  if (line.length === 1 && line[0] === '') {
    this.empty_line_count++;
  } else if (line.length !== this._.line_length) {
    // Dont check column count with relax_column_count
    if (this.options.relax_column_count) {
      this.count++;
      this.skipped_line_count++;
    } else if (this.options.columns != null) {
      return Error(`Number of columns on line ${this.lines} does not match header`);
    } else {
      return Error(`Number of columns is inconsistent on line ${this.lines}`);
    }
  } else {
    this.count++;
  }
  if (this.options.columns != null) {
    lineAsColumns = {};
    for (i = j = 0, len = line.length; j < len; i = ++j) {
      field = line[i];
      if (this.options.columns[i] === false) {
        continue;
      }
      lineAsColumns[this.options.columns[i]] = field;
    }
    if (this.options.objname) {
      row = [lineAsColumns[this.options.objname], lineAsColumns];
    } else {
      row = lineAsColumns;
    }
  } else {
    row = line;
  }
  if (this.count < this.options.from) {
    return;
  }
  if (this.count > this.options.to) {
    return;
  }
  if (this.options.raw) {
    this.push({
      raw: this._.rawBuf,
      row: row
    });
    this._.rawBuf = '';
  } else {
    this.push(row);
  }
  return null;
};

Parser.prototype.__write = function(chars, end) {
  var areNextCharsDelimiter, areNextCharsRowDelimiters, auto_parse, char, err, escapeIsQuote, i, isDelimiter, isEscape, isNextCharAComment, isQuote, isRowDelimiter, isRowDelimiterLength, is_float, is_int, l, ltrim, nextCharPos, ref, ref1, ref2, ref3, ref4, ref5, remainingBuffer, rowDelimiter, rtrim, wasCommenting;
  is_int = (value) => {
    if (typeof this.is_int === 'function') {
      return this.is_int(value);
    } else {
      return this.is_int.test(value);
    }
  };
  is_float = (value) => {
    if (typeof this.is_float === 'function') {
      return this.is_float(value);
    } else {
      return this.is_float.test(value);
    }
  };
  auto_parse = (value) => {
    if (!this.options.auto_parse) {
      return value;
    }
    if (typeof this.options.auto_parse === 'function') {
      return this.options.auto_parse(value);
    }
    // auto_parse == true
    if (is_int(value)) {
      value = parseInt(value);
    } else if (is_float(value)) {
      value = parseFloat(value);
    } else if (this.options.auto_parse_date) {
      value = this.options.auto_parse_date(value);
    }
    return value;
  };
  ltrim = this.options.trim || this.options.ltrim;
  rtrim = this.options.trim || this.options.rtrim;
  chars = this._.buf + chars;
  l = chars.length;
  i = 0;
  if (this.lines === 0 && 0xFEFF === chars.charCodeAt(0)) {
    // Strip BOM header
    i++;
  }
  while (i < l) {
    // Ensure we get enough space to look ahead
    if (!end) {
      remainingBuffer = chars.substr(i, l - i);
      // (i+1000 >= l) or
      // Skip if the remaining buffer can be comment
      // Skip if the remaining buffer can be row delimiter
      if ((!this.options.rowDelimiter && i + 3 > l) || (!this._.commenting && l - i < this.options.comment.length && this.options.comment.substr(0, l - i) === remainingBuffer) || (this.options.rowDelimiter && l - i < this._.rowDelimiterLength && this.options.rowDelimiter.some(function(rd) {
        return rd.substr(0, l - i) === remainingBuffer;
      // Skip if the remaining buffer can be row delimiter following the closing quote
      })) || (this.options.rowDelimiter && this._.quoting && l - i < (this.options.quote.length + this._.rowDelimiterLength) && this.options.rowDelimiter.some((rd) => {
        return (this.options.quote + rd).substr(0, l - i) === remainingBuffer;
      // Skip if the remaining buffer can be delimiter
      // Skip if the remaining buffer can be escape sequence
      })) || (l - i <= this.options.delimiter.length && this.options.delimiter.substr(0, l - i) === remainingBuffer) || (l - i <= this.options.escape.length && this.options.escape.substr(0, l - i) === remainingBuffer)) {
        break;
      }
    }
    char = this._.nextChar ? this._.nextChar : chars.charAt(i);
    this._.nextChar = l > i + 1 ? chars.charAt(i + 1) : '';
    if (this.options.raw) {
      this._.rawBuf += char;
    }
    // Auto discovery of rowDelimiter, unix, mac and windows supported
    if (this.options.rowDelimiter == null) {
      nextCharPos = i;
      rowDelimiter = null;
      // First empty line
      if (!this._.quoting && (char === '\n' || char === '\r')) {
        rowDelimiter = char;
        nextCharPos += 1;
      } else if (this._.quoting && char === this.options.quote && ((ref = this._.nextChar) === '\n' || ref === '\r')) {
        rowDelimiter = this._.nextChar;
        nextCharPos += 2;
        if (this.raw) {
          rawBuf += this._.nextChar;
        }
      }
      if (rowDelimiter) {
        if (rowDelimiter === '\r' && chars.charAt(nextCharPos) === '\n') {
          rowDelimiter += '\n';
        }
        this.options.rowDelimiter = [rowDelimiter];
        this._.rowDelimiterLength = rowDelimiter.length;
      }
    }
    // Parse that damn char
    // Note, shouldn't we have sth like chars.substr(i, @options.escape.length)
    if (!this._.commenting && char === this.options.escape) {
      // Make sure the escape is really here for escaping:
      // If escape is same as quote, and escape is first char of a field 
      // and it's not quoted, then it is a quote
      // Next char should be an escape or a quote
      escapeIsQuote = this.options.escape === this.options.quote;
      isEscape = this._.nextChar === this.options.escape;
      isQuote = this._.nextChar === this.options.quote;
      if (!(escapeIsQuote && (this._.field == null) && !this._.quoting) && (isEscape || isQuote)) {
        i++;
        char = this._.nextChar;
        this._.nextChar = chars.charAt(i + 1);
        if (this._.field == null) {
          this._.field = '';
        }
        this._.field += char;
        // Since we're skipping the next one, better add it now if in raw mode.
        if (this.options.raw) {
          this._.rawBuf += char;
        }
        i++;
        continue;
      }
    }
    if (!this._.commenting && char === this.options.quote) {
      if (this._.quoting) {
        // Make sure a closing quote is followed by a delimiter
        // If we have a next character and 
        // it isnt a rowDelimiter and 
        // it isnt an column delimiter and
        // it isnt the begining of a comment
        // Otherwise, if this is not "relax" mode, throw an error
        areNextCharsRowDelimiters = this.options.rowDelimiter && this.options.rowDelimiter.some(function(rd) {
          return chars.substr(i + 1, rd.length) === rd;
        });
        areNextCharsDelimiter = chars.substr(i + 1, this.options.delimiter.length) === this.options.delimiter;
        isNextCharAComment = this._.nextChar === this.options.comment;
        if (this._.nextChar && !areNextCharsRowDelimiters && !areNextCharsDelimiter && !isNextCharAComment) {
          if (this.options.relax) {
            this._.quoting = false;
            if (this._.field) {
              this._.field = `${this.options.quote}${this._.field}`;
            }
          } else {
            return Error(`Invalid closing quote at line ${this.lines + 1}; found ${JSON.stringify(this._.nextChar)} instead of delimiter ${JSON.stringify(this.options.delimiter)}`);
          }
        } else {
          this._.quoting = false;
          this._.closingQuote = this.options.quote.length;
          i++;
          if (end && i === l) {
            this._.line.push(auto_parse(this._.field || ''));
            this._.field = null;
          }
          continue;
        }
      } else if (!this._.field) {
        this._.quoting = true;
        i++;
        continue;
      } else if ((this._.field != null) && !this.options.relax) {
        return Error(`Invalid opening quote at line ${this.lines + 1}`);
      }
    }
    // Otherwise, treat quote as a regular character
    isRowDelimiter = this.options.rowDelimiter && this.options.rowDelimiter.some(function(rd) {
      return chars.substr(i, rd.length) === rd;
    });
    if (isRowDelimiter || (end && i === l - 1)) {
      this.lines++;
    }
    // Set the commenting flag
    wasCommenting = false;
    if (!this._.commenting && !this._.quoting && this.options.comment && chars.substr(i, this.options.comment.length) === this.options.comment) {
      this._.commenting = true;
    } else if (this._.commenting && isRowDelimiter) {
      wasCommenting = true;
      this._.commenting = false;
    }
    isDelimiter = chars.substr(i, this.options.delimiter.length) === this.options.delimiter;
    if (!this._.commenting && !this._.quoting && (isDelimiter || isRowDelimiter)) {
      if (isRowDelimiter) {
        isRowDelimiterLength = this.options.rowDelimiter.filter(function(rd) {
          return chars.substr(i, rd.length) === rd;
        })[0].length;
      }
      // Empty lines
      if (isRowDelimiter && this._.line.length === 0 && (this._.field == null)) {
        if (wasCommenting || this.options.skip_empty_lines) {
          i += isRowDelimiterLength;
          this._.nextChar = chars.charAt(i);
          continue;
        }
      }
      if (rtrim) {
        if (!this._.closingQuote) {
          this._.field = (ref1 = this._.field) != null ? ref1.trimRight() : void 0;
        }
      }
      this._.line.push(auto_parse(this._.field || ''));
      this._.closingQuote = 0;
      this._.field = null;
      if (isDelimiter) { // End of field
        i += this.options.delimiter.length;
        this._.nextChar = chars.charAt(i);
        if (end && !this._.nextChar) {
          isRowDelimiter = true;
          this._.line.push('');
        }
      }
      if (isRowDelimiter) {
        err = this.__push(this._.line);
        if (err) {
          return err;
        }
        // Some cleanup for the next row
        this._.line = [];
        i += isRowDelimiterLength;
        this._.nextChar = chars.charAt(i);
        continue;
      }
    } else if (!this._.commenting && !this._.quoting && (char === ' ' || char === '\t')) {
      if (this._.field == null) {
        // Left trim unless we are quoting or field already filled
        this._.field = '';
      }
      if (!(ltrim && !this._.field)) {
        this._.field += char;
      }
      i++;
    } else if (!this._.commenting) {
      if (this._.field == null) {
        this._.field = '';
      }
      this._.field += char;
      i++;
    } else {
      i++;
    }
    if (!this._.commenting && ((ref2 = this._.field) != null ? ref2.length : void 0) > this.options.max_limit_on_data_read) {
      return Error(`Field exceeds max_limit_on_data_read setting (${this.options.max_limit_on_data_read}) ${JSON.stringify(this.options.delimiter)}`);
    }
    if (!this._.commenting && ((ref3 = this._.line) != null ? ref3.length : void 0) > this.options.max_limit_on_data_read) {
      return Error(`Row delimiter not found in the file ${JSON.stringify(this.options.rowDelimiter)}`);
    }
  }
  // Flush remaining fields and lines
  if (end) {
    if (this._.field != null) {
      if (rtrim) {
        if (!this._.closingQuote) {
          this._.field = (ref4 = this._.field) != null ? ref4.trimRight() : void 0;
        }
      }
      this._.line.push(auto_parse(this._.field || ''));
      this._.field = null;
    }
    if (((ref5 = this._.field) != null ? ref5.length : void 0) > this.options.max_limit_on_data_read) {
      return Error(`Delimiter not found in the file ${JSON.stringify(this.options.delimiter)}`);
    }
    if (l === 0) {
      this.lines++;
    }
    if (this._.line.length > this.options.max_limit_on_data_read) {
      return Error(`Row delimiter not found in the file ${JSON.stringify(this.options.rowDelimiter)}`);
    }
  }
  // Store un-parsed chars for next call
  this._.buf = chars.substr(i);
  return null;
};

// ## Utils
isObjLiteral = function(_obj) {
  var _test;
  _test = _obj;
  if (typeof _obj !== 'object' || _obj === null || Array.isArray(_obj)) {
    return false;
  } else {
    return (function() {
      while (!false) {
        if (Object.getPrototypeOf(_test = Object.getPrototypeOf(_test)) === null) {
          break;
        }
      }
      return Object.getPrototypeOf(_obj === _test);
    })();
  }
};

// [readme]: https://github.com/wdavidw/node-csv-parse
// [site]: http://csv.adaltas.com/parse/
// [samples]: https://github.com/wdavidw/node-csv-parse/tree/master/samples
// [tests]: https://github.com/wdavidw/node-csv-parse/tree/master/test
// [stream]: (http://nodejs.org/api/stream.html
// [transform]: (http://nodejs.org/api/stream.html#stream_class_stream_transform_1)


/***/ }),

/***/ "./node_modules/follow-redirects/index.js":
/*!************************************************!*\
  !*** ./node_modules/follow-redirects/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(/*! url */ "url");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var assert = __webpack_require__(/*! assert */ "assert");
var Writable = __webpack_require__(/*! stream */ "stream").Writable;
var debug = __webpack_require__(/*! debug */ "./node_modules/follow-redirects/node_modules/debug/src/index.js")("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._redirectCount = 0;
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  var currentRequest = this._currentRequest;
  if (!data) {
    currentRequest.end(null, null, callback);
  }
  else {
    this.write(data, encoding, function () {
      currentRequest.end(null, null, callback);
    });
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive", "setTimeout",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var requestBodyBuffers = this._requestBodyBuffers;
    (function writeNext() {
      if (requestBodyBuffers.length !== 0) {
        var buffer = requestBodyBuffers.pop();
        request.write(buffer.data, buffer.encoding, writeNext);
      }
      else {
        request.end();
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (options, callback) {
      if (typeof options === "string") {
        options = url.parse(options);
        options.maxRedirects = exports.maxRedirects;
      }
      else {
        options = Object.assign({
          protocol: protocol,
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, options);
      }
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (options, callback) {
      var request = wrappedProtocol.request(options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/follow-redirects/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(/*! ./browser.js */ "./node_modules/follow-redirects/node_modules/debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "./node_modules/follow-redirects/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/node.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(/*! tty */ "tty");
var util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/follow-redirects/node_modules/debug/src/debug.js");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/index.js");
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/sprintf-js/src/sprintf.js":
/*!************************************************!*\
  !*** ./node_modules/sprintf-js/src/sprintf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(window) {
    var re = {
        not_string: /[^s]/,
        number: /[diefg]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
    }

    function sprintf() {
        var key = arguments[0], cache = sprintf.cache
        if (!(cache[key] && cache.hasOwnProperty(key))) {
            cache[key] = sprintf.parse(key)
        }
        return sprintf.format.call(null, cache[key], arguments)
    }

    sprintf.format = function(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = ""
        for (i = 0; i < tree_length; i++) {
            node_type = get_type(parse_tree[i])
            if (node_type === "string") {
                output[output.length] = parse_tree[i]
            }
            else if (node_type === "array") {
                match = parse_tree[i] // convenience purposes only
                if (match[2]) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < match[2].length; k++) {
                        if (!arg.hasOwnProperty(match[2][k])) {
                            throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
                        }
                        arg = arg[match[2][k]]
                    }
                }
                else if (match[1]) { // positional argument (explicit)
                    arg = argv[match[1]]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (get_type(arg) == "function") {
                    arg = arg()
                }

                if (re.not_string.test(match[8]) && re.not_json.test(match[8]) && (get_type(arg) != "number" && isNaN(arg))) {
                    throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
                }

                if (re.number.test(match[8])) {
                    is_positive = arg >= 0
                }

                switch (match[8]) {
                    case "b":
                        arg = arg.toString(2)
                    break
                    case "c":
                        arg = String.fromCharCode(arg)
                    break
                    case "d":
                    case "i":
                        arg = parseInt(arg, 10)
                    break
                    case "j":
                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
                    break
                    case "e":
                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential()
                    break
                    case "f":
                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
                    break
                    case "g":
                        arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg)
                    break
                    case "o":
                        arg = arg.toString(8)
                    break
                    case "s":
                        arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg)
                    break
                    case "u":
                        arg = arg >>> 0
                    break
                    case "x":
                        arg = arg.toString(16)
                    break
                    case "X":
                        arg = arg.toString(16).toUpperCase()
                    break
                }
                if (re.json.test(match[8])) {
                    output[output.length] = arg
                }
                else {
                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
                        sign = is_positive ? "+" : "-"
                        arg = arg.toString().replace(re.sign, "")
                    }
                    else {
                        sign = ""
                    }
                    pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " "
                    pad_length = match[6] - (sign + arg).length
                    pad = match[6] ? (pad_length > 0 ? str_repeat(pad_character, pad_length) : "") : ""
                    output[output.length] = match[5] ? sign + arg + pad : (pad_character === "0" ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output.join("")
    }

    sprintf.cache = {}

    sprintf.parse = function(fmt) {
        var _fmt = fmt, match = [], parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree[parse_tree.length] = match[0]
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree[parse_tree.length] = "%"
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list[field_list.length] = field_match[1]
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list[field_list.length] = field_match[1]
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list[field_list.length] = field_match[1]
                            }
                            else {
                                throw new SyntaxError("[sprintf] failed to parse named argument key")
                            }
                        }
                    }
                    else {
                        throw new SyntaxError("[sprintf] failed to parse named argument key")
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
                }
                parse_tree[parse_tree.length] = match
            }
            else {
                throw new SyntaxError("[sprintf] unexpected placeholder")
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return parse_tree
    }

    var vsprintf = function(fmt, argv, _argv) {
        _argv = (argv || []).slice(0)
        _argv.splice(0, 0, fmt)
        return sprintf.apply(null, _argv)
    }

    /**
     * helpers
     */
    function get_type(variable) {
        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
    }

    function str_repeat(input, multiplier) {
        return Array(multiplier + 1).join(input)
    }

    /**
     * export to either browser or node.js
     */
    if (true) {
        exports.sprintf = sprintf
        exports.vsprintf = vsprintf
    }
    else {}
})(typeof window === "undefined" ? this : window);


/***/ }),

/***/ "./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function (flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = (function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
})();


/***/ }),

/***/ "./node_modules/validator/index.js":
/*!*****************************************!*\
  !*** ./node_modules/validator/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = __webpack_require__(/*! ./lib/toDate */ "./node_modules/validator/lib/toDate.js");

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = __webpack_require__(/*! ./lib/toFloat */ "./node_modules/validator/lib/toFloat.js");

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = __webpack_require__(/*! ./lib/toInt */ "./node_modules/validator/lib/toInt.js");

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = __webpack_require__(/*! ./lib/toBoolean */ "./node_modules/validator/lib/toBoolean.js");

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = __webpack_require__(/*! ./lib/equals */ "./node_modules/validator/lib/equals.js");

var _equals2 = _interopRequireDefault(_equals);

var _contains = __webpack_require__(/*! ./lib/contains */ "./node_modules/validator/lib/contains.js");

var _contains2 = _interopRequireDefault(_contains);

var _matches = __webpack_require__(/*! ./lib/matches */ "./node_modules/validator/lib/matches.js");

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = __webpack_require__(/*! ./lib/isEmail */ "./node_modules/validator/lib/isEmail.js");

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = __webpack_require__(/*! ./lib/isURL */ "./node_modules/validator/lib/isURL.js");

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = __webpack_require__(/*! ./lib/isMACAddress */ "./node_modules/validator/lib/isMACAddress.js");

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = __webpack_require__(/*! ./lib/isIP */ "./node_modules/validator/lib/isIP.js");

var _isIP2 = _interopRequireDefault(_isIP);

var _isFQDN = __webpack_require__(/*! ./lib/isFQDN */ "./node_modules/validator/lib/isFQDN.js");

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = __webpack_require__(/*! ./lib/isBoolean */ "./node_modules/validator/lib/isBoolean.js");

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = __webpack_require__(/*! ./lib/isAlpha */ "./node_modules/validator/lib/isAlpha.js");

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = __webpack_require__(/*! ./lib/isAlphanumeric */ "./node_modules/validator/lib/isAlphanumeric.js");

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = __webpack_require__(/*! ./lib/isNumeric */ "./node_modules/validator/lib/isNumeric.js");

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isPort = __webpack_require__(/*! ./lib/isPort */ "./node_modules/validator/lib/isPort.js");

var _isPort2 = _interopRequireDefault(_isPort);

var _isLowercase = __webpack_require__(/*! ./lib/isLowercase */ "./node_modules/validator/lib/isLowercase.js");

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = __webpack_require__(/*! ./lib/isUppercase */ "./node_modules/validator/lib/isUppercase.js");

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = __webpack_require__(/*! ./lib/isAscii */ "./node_modules/validator/lib/isAscii.js");

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = __webpack_require__(/*! ./lib/isFullWidth */ "./node_modules/validator/lib/isFullWidth.js");

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = __webpack_require__(/*! ./lib/isHalfWidth */ "./node_modules/validator/lib/isHalfWidth.js");

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = __webpack_require__(/*! ./lib/isVariableWidth */ "./node_modules/validator/lib/isVariableWidth.js");

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = __webpack_require__(/*! ./lib/isMultibyte */ "./node_modules/validator/lib/isMultibyte.js");

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = __webpack_require__(/*! ./lib/isSurrogatePair */ "./node_modules/validator/lib/isSurrogatePair.js");

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = __webpack_require__(/*! ./lib/isInt */ "./node_modules/validator/lib/isInt.js");

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = __webpack_require__(/*! ./lib/isFloat */ "./node_modules/validator/lib/isFloat.js");

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = __webpack_require__(/*! ./lib/isDecimal */ "./node_modules/validator/lib/isDecimal.js");

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = __webpack_require__(/*! ./lib/isHexadecimal */ "./node_modules/validator/lib/isHexadecimal.js");

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = __webpack_require__(/*! ./lib/isDivisibleBy */ "./node_modules/validator/lib/isDivisibleBy.js");

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = __webpack_require__(/*! ./lib/isHexColor */ "./node_modules/validator/lib/isHexColor.js");

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isISRC = __webpack_require__(/*! ./lib/isISRC */ "./node_modules/validator/lib/isISRC.js");

var _isISRC2 = _interopRequireDefault(_isISRC);

var _isMD = __webpack_require__(/*! ./lib/isMD5 */ "./node_modules/validator/lib/isMD5.js");

var _isMD2 = _interopRequireDefault(_isMD);

var _isHash = __webpack_require__(/*! ./lib/isHash */ "./node_modules/validator/lib/isHash.js");

var _isHash2 = _interopRequireDefault(_isHash);

var _isJSON = __webpack_require__(/*! ./lib/isJSON */ "./node_modules/validator/lib/isJSON.js");

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = __webpack_require__(/*! ./lib/isEmpty */ "./node_modules/validator/lib/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = __webpack_require__(/*! ./lib/isLength */ "./node_modules/validator/lib/isLength.js");

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = __webpack_require__(/*! ./lib/isByteLength */ "./node_modules/validator/lib/isByteLength.js");

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = __webpack_require__(/*! ./lib/isUUID */ "./node_modules/validator/lib/isUUID.js");

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = __webpack_require__(/*! ./lib/isMongoId */ "./node_modules/validator/lib/isMongoId.js");

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isAfter = __webpack_require__(/*! ./lib/isAfter */ "./node_modules/validator/lib/isAfter.js");

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = __webpack_require__(/*! ./lib/isBefore */ "./node_modules/validator/lib/isBefore.js");

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = __webpack_require__(/*! ./lib/isIn */ "./node_modules/validator/lib/isIn.js");

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = __webpack_require__(/*! ./lib/isCreditCard */ "./node_modules/validator/lib/isCreditCard.js");

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = __webpack_require__(/*! ./lib/isISIN */ "./node_modules/validator/lib/isISIN.js");

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = __webpack_require__(/*! ./lib/isISBN */ "./node_modules/validator/lib/isISBN.js");

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = __webpack_require__(/*! ./lib/isISSN */ "./node_modules/validator/lib/isISSN.js");

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = __webpack_require__(/*! ./lib/isMobilePhone */ "./node_modules/validator/lib/isMobilePhone.js");

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = __webpack_require__(/*! ./lib/isCurrency */ "./node_modules/validator/lib/isCurrency.js");

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = __webpack_require__(/*! ./lib/isISO8601 */ "./node_modules/validator/lib/isISO8601.js");

var _isISO2 = _interopRequireDefault(_isISO);

var _isISO31661Alpha = __webpack_require__(/*! ./lib/isISO31661Alpha2 */ "./node_modules/validator/lib/isISO31661Alpha2.js");

var _isISO31661Alpha2 = _interopRequireDefault(_isISO31661Alpha);

var _isBase = __webpack_require__(/*! ./lib/isBase64 */ "./node_modules/validator/lib/isBase64.js");

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = __webpack_require__(/*! ./lib/isDataURI */ "./node_modules/validator/lib/isDataURI.js");

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _isMimeType = __webpack_require__(/*! ./lib/isMimeType */ "./node_modules/validator/lib/isMimeType.js");

var _isMimeType2 = _interopRequireDefault(_isMimeType);

var _isLatLong = __webpack_require__(/*! ./lib/isLatLong */ "./node_modules/validator/lib/isLatLong.js");

var _isLatLong2 = _interopRequireDefault(_isLatLong);

var _isPostalCode = __webpack_require__(/*! ./lib/isPostalCode */ "./node_modules/validator/lib/isPostalCode.js");

var _isPostalCode2 = _interopRequireDefault(_isPostalCode);

var _ltrim = __webpack_require__(/*! ./lib/ltrim */ "./node_modules/validator/lib/ltrim.js");

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = __webpack_require__(/*! ./lib/rtrim */ "./node_modules/validator/lib/rtrim.js");

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = __webpack_require__(/*! ./lib/trim */ "./node_modules/validator/lib/trim.js");

var _trim2 = _interopRequireDefault(_trim);

var _escape = __webpack_require__(/*! ./lib/escape */ "./node_modules/validator/lib/escape.js");

var _escape2 = _interopRequireDefault(_escape);

var _unescape = __webpack_require__(/*! ./lib/unescape */ "./node_modules/validator/lib/unescape.js");

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = __webpack_require__(/*! ./lib/stripLow */ "./node_modules/validator/lib/stripLow.js");

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = __webpack_require__(/*! ./lib/whitelist */ "./node_modules/validator/lib/whitelist.js");

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = __webpack_require__(/*! ./lib/blacklist */ "./node_modules/validator/lib/blacklist.js");

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = __webpack_require__(/*! ./lib/isWhitelisted */ "./node_modules/validator/lib/isWhitelisted.js");

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = __webpack_require__(/*! ./lib/normalizeEmail */ "./node_modules/validator/lib/normalizeEmail.js");

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = __webpack_require__(/*! ./lib/util/toString */ "./node_modules/validator/lib/util/toString.js");

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '9.3.0';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphanumeric: _isAlphanumeric2.default,
  isNumeric: _isNumeric2.default,
  isPort: _isPort2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isISRC: _isISRC2.default,
  isMD5: _isMD2.default,
  isHash: _isHash2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isPostalCode: _isPostalCode2.default,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isISO31661Alpha2: _isISO31661Alpha2.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  isMimeType: _isMimeType2.default,
  isLatLong: _isLatLong2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/alpha.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/alpha.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = {
  'en-US': /^[A-Z]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'el-GR': /^[Α-ω]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = exports.alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'bg-BG': /^[0-9А-Я]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'el-GR': /^[0-9Α-ω]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var decimal = exports.decimal = {
  'en-US': '.',
  ar: '٫'
};

var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  decimal[locale] = decimal['en-US'];
}

// Source: http://www.localeplanet.com/java/
var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = 'ar-' + arabicLocales[_i];
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
}

// Source: https://en.wikipedia.org/wiki/Decimal_mark
var dotDecimal = exports.dotDecimal = [];
var commaDecimal = exports.commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fr-FR', 'it-IT', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-Pl', 'pt-PT', 'ru-RU', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];

for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
  decimal[dotDecimal[_i2]] = decimal['en-US'];
}

for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
  decimal[commaDecimal[_i3]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT'];

/***/ }),

/***/ "./node_modules/validator/lib/blacklist.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/blacklist.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/contains.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/contains.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(/*! ./util/toString */ "./node_modules/validator/lib/util/toString.js");

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString2.default)(str);
  return str.indexOf((0, _toString2.default)(elem)) >= 0;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/equals.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/equals.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString2.default)(str);
  return str === comparison;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/escape.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/escape.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isAfter.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAfter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(/*! ./toDate */ "./node_modules/validator/lib/toDate.js");

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original > comparison);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isAlpha.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAlpha.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isAlphanumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/isAlphanumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isAscii.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAscii.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString2.default)(str);
  return ascii.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isBase64.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBase64.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString2.default)(str);
  var len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isBefore.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBefore.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(/*! ./toDate */ "./node_modules/validator/lib/toDate.js");

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original < comparison);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isBoolean.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isBoolean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString2.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isByteLength.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isByteLength.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isCreditCard.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isCreditCard.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isCurrency.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isCurrency.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var decimal_digits = '\\d{' + options.digits_after_decimal[0] + '}';
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = decimal_digits + '|\\d{' + digit + '}';
  });
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
      decimal_amount = '(\\' + options.decimal_separator + '(' + decimal_digits + '))' + (options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : '');

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  } else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  return new RegExp('^(?!-? )(?=.*\\d)' + pattern + '$');
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isDataURI.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isDataURI.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

function isDataURI(str) {
  (0, _assertString2.default)(str);
  return dataURI.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isDecimal.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isDecimal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decimalRegExp(options) {
  var regExp = new RegExp('^[-+]?([0-9]+)?(\\' + _alpha.decimal[options.locale] + '[0-9]{' + options.decimal_digits + '})' + (options.force_decimal ? '' : '?') + '$');
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};

var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_decimal_options);
  if (options.locale in _alpha.decimal) {
    return !blacklist.includes(str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }
  throw new Error('Invalid locale \'' + options.locale + '\'');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isDivisibleBy.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isDivisibleBy.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _toFloat = __webpack_require__(/*! ./toFloat */ "./node_modules/validator/lib/toFloat.js");

var _toFloat2 = _interopRequireDefault(_toFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString2.default)(str);
  return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isEmail.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmail.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__(/*! ./isByteLength */ "./node_modules/validator/lib/isByteLength.js");

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js");

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isEmpty.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmpty.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty(str) {
  (0, _assertString2.default)(str);
  return str.length === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isFloat.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isFloat.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(/*! ./alpha */ "./node_modules/validator/lib/alpha.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFloat(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};
  var float = new RegExp('^(?:[-+])?(?:[0-9]+)?(?:\\' + (options.locale ? _alpha.decimal[options.locale] : '.') + '[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$');
  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }
  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isFullWidth.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isFullWidth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = undefined;
exports.default = isFullWidth;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  (0, _assertString2.default)(str);
  return fullWidth.test(str);
}

/***/ }),

/***/ "./node_modules/validator/lib/isHalfWidth.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isHalfWidth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.halfWidth = undefined;
exports.default = isHalfWidth;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
  (0, _assertString2.default)(str);
  return halfWidth.test(str);
}

/***/ }),

/***/ "./node_modules/validator/lib/isHash.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isHash.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHash;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  (0, _assertString2.default)(str);
  var hash = new RegExp('^[a-f0-9]{' + lengths[algorithm] + '}$');
  return hash.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isHexColor.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isHexColor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString2.default)(str);
  return hexcolor.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isHexadecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isHexadecimal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString2.default)(str);
  return hexadecimal.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isIP.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isISBN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISBN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i = void 0;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isISIN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISIN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString2.default)(str);
  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });

  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = true;
  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isISO31661Alpha2.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isISO31661Alpha2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha2;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
  (0, _assertString2.default)(str);
  return validISO31661Alpha2CountriesCodes.includes(str.toUpperCase());
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isISO8601.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isISO8601.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO8601;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

function isISO8601(str) {
  (0, _assertString2.default)(str);
  return iso8601.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isISRC.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISRC.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString2.default)(str);
  return isrc.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isISSN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISSN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _assertString2.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  var issnDigits = str.replace('-', '');
  var position = 8;
  var checksum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = issnDigits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;

      var digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
      checksum += digitValue * position;
      --position;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return checksum % 11 === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isIn.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isIn;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(/*! ./util/toString */ "./node_modules/validator/lib/util/toString.js");

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIn(str, options) {
  (0, _assertString2.default)(str);
  var i = void 0;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString2.default)(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isInt.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isInt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

  // Check min/max/lt/gt
  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isJSON.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isJSON.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isJSON;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSON(str) {
  (0, _assertString2.default)(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  } catch (e) {/* ignore */}
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isLatLong.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isLatLong.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  (0, _assertString2.default)(str);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  return lat.test(pair[0]) && long.test(pair[1]);
};

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isLength.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isLength.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isLength;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isLowercase.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isLowercase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toLowerCase();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isMACAddress.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isMACAddress.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str) {
  (0, _assertString2.default)(str);
  return macAddress.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isMD5.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isMD5.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString2.default)(str);
  return md5.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isMimeType.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isMimeType.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMimeType;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/

// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len

// Handle "charset" in "text/*"
var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len

// Handle "boundary" in "multipart/*"
var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

function isMimeType(str) {
  (0, _assertString2.default)(str);
  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isMobilePhone.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isMobilePhone.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[3456789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale) {
  (0, _assertString2.default)(str);
  if (locale in phones) {
    return phones[locale].test(str);
  } else if (locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];
        if (phone.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isMongoId.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isMongoId.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _isHexadecimal = __webpack_require__(/*! ./isHexadecimal */ "./node_modules/validator/lib/isHexadecimal.js");

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString2.default)(str);
  return (0, _isHexadecimal2.default)(str) && str.length === 24;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isMultibyte.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isMultibyte.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString2.default)(str);
  return multibyte.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isNumeric.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isNumeric.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isPort.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isPort.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPort;

var _isInt = __webpack_require__(/*! ./isInt */ "./node_modules/validator/lib/isInt.js");

var _isInt2 = _interopRequireDefault(_isInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPort(str) {
  return (0, _isInt2.default)(str, { min: 0, max: 65535 });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isPostalCode.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isPostalCode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locales = undefined;

exports.default = function (str, locale) {
  (0, _assertString2.default)(str);
  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];
        if (pattern.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
};

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;

var patterns = {
  AT: fourDigit,
  AU: fourDigit,
  BE: fourDigit,
  BG: fourDigit,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  IL: fiveDigit,
  IN: sixDigit,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  MX: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s?\d{2}$/,
  TW: /^\d{3}(\d{2})?$/,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};

var locales = exports.locales = Object.keys(patterns);

/***/ }),

/***/ "./node_modules/validator/lib/isSurrogatePair.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/isSurrogatePair.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString2.default)(str);
  return surrogatePair.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isURL.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isURL.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = __webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js");

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = __webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js");

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isUUID.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isUUID.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

  (0, _assertString2.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isUppercase.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isUppercase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toUpperCase();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isVariableWidth.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/isVariableWidth.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _isFullWidth = __webpack_require__(/*! ./isFullWidth */ "./node_modules/validator/lib/isFullWidth.js");

var _isHalfWidth = __webpack_require__(/*! ./isHalfWidth */ "./node_modules/validator/lib/isHalfWidth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString2.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isWhitelisted.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isWhitelisted.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString2.default)(str);
  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/ltrim.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/ltrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/matches.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/matches.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString2.default)(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/normalizeEmail.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/normalizeEmail.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,

  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,

  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,

  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,

  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
};

// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

function normalizeEmail(email, options) {
  options = (0, _merge2.default)(options, default_normalize_email_options);

  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain];

  // The domain is always lowercased, as it's case-insensitive per RFC 1035
  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.gmail_remove_dots) {
      parts[0] = parts[0].replace(/\./g, '');
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (~icloud_domains.indexOf(parts[1])) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~outlookdotcom_domains.indexOf(parts[1])) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~yahoo_domains.indexOf(parts[1])) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/rtrim.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/rtrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/stripLow.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/stripLow.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _blacklist = __webpack_require__(/*! ./blacklist */ "./node_modules/validator/lib/blacklist.js");

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString2.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist2.default)(str, chars);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/toBoolean.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/toBoolean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString2.default)(str);
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/toDate.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/toDate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString2.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/toFloat.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/toFloat.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString2.default)(str);
  return parseFloat(str);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/toInt.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/toInt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString2.default)(str);
  return parseInt(str, radix || 10);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/trim.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/trim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = __webpack_require__(/*! ./rtrim */ "./node_modules/validator/lib/rtrim.js");

var _rtrim2 = _interopRequireDefault(_rtrim);

var _ltrim = __webpack_require__(/*! ./ltrim */ "./node_modules/validator/lib/ltrim.js");

var _ltrim2 = _interopRequireDefault(_ltrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/unescape.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/unescape.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/util/toString.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/util/toString.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toString;
function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }
  return String(input);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/whitelist.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/whitelist.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, directories, scripts, author, license, dependencies, devDependencies, jest, default */
/***/ (function(module) {

module.exports = {"name":"contact-uploader","version":"0.0.1","description":"Automated contact uploader for CNMI PSS","main":"bin/contactUploader.js","directories":{"doc":"doc","test":"__tests__"},"scripts":{"build":"NODE_ENV=production node_modules/rollup/bin/rollup -c rollup.config.js","test":"jest"},"author":"Tyler Collins","license":"ISC","dependencies":{"argparse":"^1.0.10","axios":"^0.17.1","csv":"^2.0.0","csv-parse":"^2.0.0","minimist":"^1.2.0","validator":"^9.3.0","wordpress":"^1.4.1"},"devDependencies":{"@types/jest":"^22.2.2","@types/node":"^9.6.0","awesome-typescript-loader":"^5.0.0-0","babel-cli":"^6.26.0","babel-plugin-external-helpers":"^6.22.0","babel-plugin-transform-es2015-destructuring":"^6.23.0","babel-plugin-transform-es2015-parameters":"^6.24.1","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.6.1","eslint":"^4.16.0","eslint-config-airbnb-base":"^12.1.0","eslint-plugin-import":"^2.8.0","rollup":"^0.55.1","rollup-plugin-babel":"^3.0.3","rollup-plugin-typescript":"^0.8.1","rollup-plugin-uglify":"^3.0.0","sinon":"^4.5.0","source-map-loader":"^0.2.3","ts-jest":"^22.4.2","tslint":"^5.9.1","typescript":"^2.8.1","typescript-eslint-parser":"^14.0.0","uglify-es":"^3.3.9","webpack":"^4.3.0","webpack-cli":"^2.0.13"},"jest":{"transform":{"^.+\\.tsx?$":"ts-jest"},"testRegex":"(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$","moduleFileExtensions":["ts","tsx","js","jsx","json","node"]}};

/***/ }),

/***/ "./src/handlers/CSVParser.ts":
/*!***********************************!*\
  !*** ./src/handlers/CSVParser.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csv_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csv-parse */ "./node_modules/csv-parse/lib/index.js");
/* harmony import */ var csv_parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csv_parse__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var CSVParser = /** @class */ (function () {
    function CSVParser(file, process) {
        this.file = file;
        this.process = process;
    }
    CSVParser.prototype.parse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.process;
                        return [4 /*yield*/, this.parseCSVFile()];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    CSVParser.prototype.parseCSVFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        csv_parse__WEBPACK_IMPORTED_MODULE_0___default()(_this.file, {}, function (err, out) {
                            if (err)
                                reject(err);
                            resolve(out);
                        });
                    })];
            });
        });
    };
    return CSVParser;
}());
/* harmony default export */ __webpack_exports__["default"] = (CSVParser);


/***/ }),

/***/ "./src/handlers/Configuration.ts":
/*!***************************************!*\
  !*** ./src/handlers/Configuration.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var argparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! argparse */ "./node_modules/argparse/index.js");
/* harmony import */ var argparse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(argparse__WEBPACK_IMPORTED_MODULE_1__);


var Configuration = /** @class */ (function () {
    function Configuration(file) {
        Object.defineProperties(this, {
            packageConfig: {
                value: __webpack_require__(/*! ../../package.json */ "./package.json"),
                enumerable: false,
                writable: false,
            },
            jsonConfig: {
                value: JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"](file, { encoding: 'utf-8' })),
                enumerable: false,
                writable: false,
            },
            argParser: {
                enumerable: false,
                writable: true,
            }
        });
        Object.assign(this, this.jsonConfig, this.parseArgs());
        this.validateSettings();
    }
    Configuration.prototype.validateSettings = function () {
        if (!(this.all || this.personnel || this.schools || this.offices || this.headstarts)) {
            console.error("No task specified.  Please specify at least one of --personnel, --offices, --schools, --headstarts, or --all.\n");
            this.argParser.printHelp();
            process.exit(1);
        }
        if (this.all && (this.personnel || this.schools || this.offices || this.headstarts)) {
            console.error("Ambiguous combination of --all and one or more other tasks.  Performing --all...\n");
        }
    };
    Configuration.prototype.parseArgs = function () {
        this.argParser = new argparse__WEBPACK_IMPORTED_MODULE_1__["ArgumentParser"]({
            version: this.packageConfig.version,
            addHelp: true,
            description: this.packageConfig.description,
        });
        this.argParser.addArgument(['--all'], {
            help: 'Parse and upload data from all files',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--personnel'], {
            help: 'Parse and upload data from personnel.csv',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--offices'], {
            help: 'Parse and upload data from offices.csv',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--schools'], {
            help: 'Parse and upload data from schools.csv',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--headstarts'], {
            help: 'Parse and upload data from headstarts.csv',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--test'], {
            help: 'Perform a test run without uploading any data and report any errors in data that are detected.',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--secure'], {
            help: 'Whether to force the use of https',
            action: 'storeTrue',
            defaultValue: false
        });
        return this.argParser.parseArgs();
    };
    return Configuration;
}());
/* harmony default export */ __webpack_exports__["default"] = (Configuration);


/***/ }),

/***/ "./src/handlers/ContactUploader.ts":
/*!*****************************************!*\
  !*** ./src/handlers/ContactUploader.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

/**
 * Abstract base class containing share functionality for reading, parsing, and
 * uploading contact information to CNMI PSS WordPress site.
 *
 * @export
 * @abstract
 * @class ContactUploader
 */
var ContactUploader = /** @class */ (function () {
    function ContactUploader(config, wpPostType, searchQuery) {
        this.config = config;
        this.wpPostType = wpPostType;
        this.protocol = config.secure ? "https://" : "http://";
        this.mainRoute = "" + this.protocol + config.host + "/wp-json/wp/v2/" + wpPostType + "/";
        this.acfRoute = "" + this.protocol + config.host + "/wp-json/acf/v3/" + wpPostType + "/";
        this.searchQuery = searchQuery.bind(this);
    }
    ContactUploader.prototype.searchWP = function (records, type) {
        var _this = this;
        return records.map(function (record) { return __awaiter(_this, void 0, void 0, function () {
            var queryRoute, searchResults, existingData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRoute = this.searchQuery(record);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(queryRoute)];
                    case 1:
                        searchResults = _a.sent();
                        existingData = searchResults.data.filter(function (result) { return result.type === type; })[0];
                        return [2 /*return*/, __assign({}, record, { existingData: existingData })];
                }
            });
        }); });
    };
    ContactUploader.prototype.postData = function (record) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, existingData, data, authToken, dataString, config, mainRoute;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, record];
                    case 1:
                        _a = _b.sent(), existingData = _a.existingData, data = __rest(_a, ["existingData"]);
                        authToken = this.authToken.token;
                        dataString = JSON.stringify(data);
                        config = {
                            headers: {
                                "Authorization": "Bearer " + authToken,
                                "Content-Type": "application/json",
                            },
                        };
                        if (existingData) {
                            console.log("Updating pre-existing record", data.title, existingData.id);
                        }
                        else {
                            console.log("Posting data for " + data.title);
                        }
                        mainRoute = existingData ? this.mainRoute + existingData.id : this.mainRoute;
                        if (!!this.config.test) return [3 /*break*/, 3];
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(mainRoute, dataString, config)
                                .catch(function (err) { return console.error("Error posting data to WP", mainRoute, data.title, "\n", err); })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        console.info("\nThis is a test.  Otherwise, would have posted: \n", mainRoute, "\n", dataString, "\n", config, "\n");
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * POST data read from this.file to WP server defined by
     * contactUploader.json
     *
     * @memberof FileUploader
     */
    ContactUploader.prototype.post = function (records) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, getToken(this.config)];
                    case 1:
                        _a.authToken = _b.sent();
                        this.searchWP(records, this.wpPostType)
                            .map(function (promisedRecord) { return __awaiter(_this, void 0, void 0, function () {
                            var record;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, promisedRecord];
                                    case 1:
                                        record = _a.sent();
                                        if (!(record.title.trim().length > 0)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.postData(record)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ContactUploader;
}());
/* harmony default export */ __webpack_exports__["default"] = (ContactUploader);
/**
 * Use the WP REST API to fetch a JWT for authorizing future requests.
 *
 * @export
 * @param {ContactUploaderConfig} config
 * @returns {Promise<string>}
 */
function getToken(config) {
    return __awaiter(this, void 0, void 0, function () {
        var host, username, password, secure, protocol, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    host = config.host, username = config.username, password = config.password, secure = config.secure;
                    protocol = secure ? "https" : "http";
                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(protocol + "://" + host + "/wp-json/jwt-auth/v1/token", { username: username, password: password }, { headers: { "Content-Type": "application/json" } }).catch(function (err) {
                            console.error("Error retrieving WP auth token", err);
                            console.log("Exiting...");
                            process.exit(1);
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    });
}


/***/ }),

/***/ "./src/handlers/Handler.ts":
/*!*********************************!*\
  !*** ./src/handlers/Handler.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactUploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUploader */ "./src/handlers/ContactUploader.ts");
/* harmony import */ var _CSVParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSVParser */ "./src/handlers/CSVParser.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Abstract base class for handling different types of contact information
 *
 * @export
 * @abstract
 * @class Handler
 */
var Handler = /** @class */ (function () {
    function Handler(opts) {
        this.uploader = new _ContactUploader__WEBPACK_IMPORTED_MODULE_1__["default"](opts.uploaderConfig, opts.type, opts.searchQuery);
        this.file = fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"](opts.filename, {
            encoding: "utf-8",
        });
        this.parser = new _CSVParser__WEBPACK_IMPORTED_MODULE_2__["default"](this.file, this.process);
    }
    /**
     * Parse a CSV File into a list of AbstractRecords
     *
     * @memberof Handler
     */
    Handler.prototype.parse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.parser.parse()];
                    case 1:
                        _a.records = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Post AbstractRecords to WordPress using this.uploader.post
     *
     * @memberof Handler
     */
    Handler.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploader.post(this.records)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Handler;
}());
/* harmony default export */ __webpack_exports__["default"] = (Handler);


/***/ }),

/***/ "./src/handlers/headstarts/index.ts":
/*!******************************************!*\
  !*** ./src/handlers/headstarts/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Handler */ "./src/handlers/Handler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var HeadstartsHandler = /** @class */ (function (_super) {
    __extends(HeadstartsHandler, _super);
    function HeadstartsHandler(uploaderConfig) {
        return _super.call(this, {
            uploaderConfig: uploaderConfig,
            type: "school",
            searchQuery: searchQuery,
            filename: "headstarts.csv",
        }) || this;
    }
    HeadstartsHandler.prototype.process = function (data) {
        return data.slice(1)
            .reduce(reduceSchools, [])
            .filter(filterSchools)
            // .slice(0, 1)
            .map(parseSchools);
    };
    return HeadstartsHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (HeadstartsHandler);
function searchQuery(record) {
    return this.mainRoute + "?per_page=50&search=" + record.title;
}
function reduceSchools(schoolList, nextLine) {
    if (!Array.isArray(schoolList[0])) {
        return [[nextLine]];
    }
    else if (nextLine[0].match("\\d")) {
        return schoolList.concat([[nextLine]]);
    }
    else {
        var lastSchool = schoolList.pop();
        if (lastSchool) {
            lastSchool.push(nextLine);
            return schoolList.concat([lastSchool]);
        }
    }
    return schoolList;
}
function filterSchools(school) {
    return true;
}
function parseSchools(school) {
    var long_name = school[0][1];
    var coordinator = {
        name: school[1][4],
        telephone: formatTel(school[1][5]),
        email: school[1][6]
    };
    var admin_staff = school.map(function (row) { return ({
        name: row[2],
        telephone: [row[3], row[5]]
            .filter(function (n) { return n.trim().length > 0; })
            .map(formatTel)
            .join(", "),
        email: row[6]
    }); })
        .filter(function (_a) {
        var name = _a.name;
        return name.length > 0;
    })
        .map(function (_a) {
        var name = _a.name, telephone = _a.telephone, email = _a.email;
        return [name,
            telephone.trim().length > 0 ? "Tel: " + telephone : null,
            email.trim().length > 0 ? "Email: " + email : null].filter(function (str) { return str; }).join("\r\n");
    })
        .reduce(function (arr, next) { return arr.concat([next]); }, coordinator.name ? [
        [coordinator.name + ", Site Coordinator",
            "Tel: " + coordinator.telephone,
            "Email: " + coordinator.email,
        ].join("\r\n")
    ] : [])
        .join("\r\n\r\n");
    return {
        title: long_name,
        status: "publish",
        level: setSchoolLevel(long_name),
        fields: {
            long_name: long_name,
            short_name: long_name,
            address: "",
            fax: "",
            telephone: "",
            admin_staff: admin_staff,
        },
        existingData: null,
    };
}
function formatTel(tel) {
    if (tel.length > 0 && tel.match("\\d")) {
        var correctPattern = new RegExp("^\\(\\d{3}\\)\\s*\\d{3}\\-\\d{4}$");
        var fixPattern = new RegExp("(\\(\\d{3}\\))?\\s*(\\d{3})\\-([\\d\\/\\-\\s]{4,})");
        if (tel.match(correctPattern)) {
            return tel;
        }
        else {
            var matches = tel.match(fixPattern);
            if (matches) {
                return "(670) " + matches[2] + "-" + matches[3];
            }
        }
    }
    return "";
}
function setSchoolLevel(name) {
    var headstartRE = new RegExp("Head", "i");
    var elemRE = new RegExp("Elem", "i");
    var middleRE = new RegExp("Middle", "i");
    var jrsrRE = new RegExp("jr", "i");
    var highRE = new RegExp("(High|Da'ok)", "i");
    var reList = [headstartRE, elemRE, middleRE, jrsrRE, highRE];
    var mapping = (_a = {},
        _a[headstartRE] = ["54"],
        _a[elemRE] = ["51"],
        _a[middleRE] = ["50"],
        _a[jrsrRE] = ["53"],
        _a[highRE] = ["52"],
        _a);
    return reList.filter(function (re) { return re.test(name); })
        .map(function (re) { return mapping[re]; })[0];
    var _a;
}


/***/ }),

/***/ "./src/handlers/offices/index.ts":
/*!***************************************!*\
  !*** ./src/handlers/offices/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Handler */ "./src/handlers/Handler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OfficesHandler = /** @class */ (function (_super) {
    __extends(OfficesHandler, _super);
    function OfficesHandler(uploaderConfig) {
        var _this = this;
        var config = {
            uploaderConfig: uploaderConfig,
            type: "contact_info",
            searchQuery: searchQuery,
            filename: "offices.csv",
        };
        _this = _super.call(this, config) || this;
        return _this;
    }
    OfficesHandler.prototype.process = function (data) {
        return data.slice(1)
            .filter(filterOffices)
            .map(parseOffices);
    };
    return OfficesHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (OfficesHandler);
function searchQuery(record) {
    return this.mainRoute + "?per_page=50&search=" + record.fields.name;
}
/**
 * Keep only offices which have a valid building number and location
 *
 * @param {string[]} row
 * @returns {boolean}
 */
function filterOffices(row) {
    return row[0].trim().length > 0 && row[2].trim().length > 1;
}
/**
 * Convert a record from the CSV file to an OfficeData
 *
 * @param {string[]} office
 * @returns {OfficeData}
 */
function parseOffices(office) {
    var address = office[2].trim() == "Capitol Hill" ? "Capitol Hill Bldg #" + office[0].trim() : office[2].trim();
    return {
        title: office[1],
        status: "publish",
        existingData: null,
        fields: {
            name: office[1],
            address: address,
            telephone: office[3],
            fax: office[4],
        }
    };
}


/***/ }),

/***/ "./src/handlers/personnel/index.ts":
/*!*****************************************!*\
  !*** ./src/handlers/personnel/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handler */ "./src/handlers/Handler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PersonnelHandler = /** @class */ (function (_super) {
    __extends(PersonnelHandler, _super);
    function PersonnelHandler(uploaderConfig) {
        return _super.call(this, {
            uploaderConfig: uploaderConfig,
            type: "contact_info",
            searchQuery: searchQuery,
            filename: "personnel.csv",
        }) || this;
    }
    PersonnelHandler.prototype.process = function (data) {
        return data.reduce(reducePersonnel, [])
            .map(filterRows)
            .map(parseRows)
            .reduce(function (list, officePersonnel) {
            return (list.concat(officePersonnel));
        }, []);
    };
    return PersonnelHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (PersonnelHandler);
function searchQuery(record) {
    return this.mainRoute + "?per_page=50&search=" + record.fields.email;
}
/**
 * Group personnel records from a single office into an array of records
 * forming an array of arrays (each top-level element represents a single
 * office)
 *
 * @param {any[]} personnelList
 * @param {string[]} nextLine
 * @returns
 */
function reducePersonnel(personnelList, nextLine) {
    if (nextLine[1] === "PHONE") {
        personnelList.push([nextLine]);
        return personnelList;
    }
    var currentBuilding = personnelList.pop();
    if (currentBuilding) {
        currentBuilding.push(nextLine);
        personnelList.push(currentBuilding);
    }
    return personnelList;
}
/**
 * Keep only rows that define an office or that have a valid contact email
 *
 * @param {string[][]} officePersonnel
 * @returns
 */
function filterRows(officePersonnel, number) {
    var office = officePersonnel[0][0].toLowerCase()
        .split(" ")
        .filter(function (word) { return word.length > 0; })
        .map(function (word) { return "" + word[0].toUpperCase() + word.slice(1); })
        .join(" ");
    var personnel = officePersonnel.slice(1);
    return {
        office: office,
        number: number,
        personnel: personnel.filter(function (person) { return Object(validator__WEBPACK_IMPORTED_MODULE_0__["isEmail"])(person[5]); }),
    };
}
/**
 * Convert rows from personnel.csv grouped by office to PersonnelRecord
 * objects grouped by office.
 *
 * @param {OfficePersonnel} officePersonnel
 * @returns {PersonnelRecord[]}
 */
function parseRows(officePersonnel, rank) {
    var office = officePersonnel.office, number = officePersonnel.number, personnel = officePersonnel.personnel;
    return personnel.map(function (person, n) {
        var address = office + "\nPO Box 501370 CK\nSaipan MP, 96950";
        var name = "";
        var jobTitle;
        var splitName = person[0].split(", ");
        if (splitName.length > 1) {
            name = person[0].split(", ")
                .slice(0, -1)
                .join(", ");
            jobTitle = person[0].split(", ")
                .slice(-1)[0];
        }
        else {
            name = person[0];
            jobTitle = "";
        }
        var telephone = person.slice(1, 4)
            .filter(function (s) { return s.trim().length > 0; })
            .join(", ");
        var fax = person[4];
        var email = person[5];
        return {
            existingData: null,
            fields: {
                address: address,
                email: email,
                fax: fax,
                job_title: jobTitle.trim(),
                name: name,
                telephone: telephone,
                office: office,
                rank: pad(number, 3) + "-" + pad(n, 3),
            },
            status: "publish",
            title: name,
        };
    });
}
function pad(num, size) {
    var s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s;
}


/***/ }),

/***/ "./src/handlers/schools/index.ts":
/*!***************************************!*\
  !*** ./src/handlers/schools/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Handler */ "./src/handlers/Handler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SchoolsHandler = /** @class */ (function (_super) {
    __extends(SchoolsHandler, _super);
    function SchoolsHandler(uploaderConfig) {
        return _super.call(this, {
            uploaderConfig: uploaderConfig,
            type: "school",
            searchQuery: searchQuery,
            filename: "schools.csv",
        }) || this;
    }
    SchoolsHandler.prototype.process = function (data) {
        return data.slice(1)
            .reduce(reduceSchools, [])
            .filter(filterSchools)
            // .slice(0, 1)
            .map(parseSchools);
    };
    return SchoolsHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SchoolsHandler);
function searchQuery(record) {
    return this.mainRoute + "?per_page=50&search=" + record.title;
}
function reduceSchools(schoolList, nextLine) {
    if (!Array.isArray(schoolList[0])) {
        return [[nextLine]];
    }
    else if (nextLine[0].match("\\d")) {
        return schoolList.concat([[nextLine]]);
    }
    else {
        var lastSchool = schoolList.pop();
        if (lastSchool) {
            lastSchool.push(nextLine);
            return schoolList.concat([lastSchool]);
        }
    }
    return schoolList;
}
function filterSchools(school) {
    return true;
}
function parseSchools(school) {
    var long_name = school[0][1];
    var short_name = school[1][0];
    var address = [school[1][1], school[2][1], school[3][1]].join("\r\n");
    var fax = school[0][5];
    var telephone = school[0][3];
    var admin_staff = school.map(function (row) { return ({
        name: row[2],
        telephone: [row[3], row[4]]
            .filter(function (n) { return n.trim().length > 0; })
            .map(formatTel)
            .join(", "),
        email: row[7]
    }); })
        .filter(function (_a) {
        var name = _a.name;
        return name.length > 0;
    })
        .map(function (_a) {
        var name = _a.name, telephone = _a.telephone, email = _a.email;
        return [name,
            telephone.trim().length > 0 ? "Tel: " + telephone : null,
            email.trim().length > 0 ? "Email: " + email : null].filter(function (str) { return str; }).join("\r\n");
    })
        .join("\r\n\r\n");
    return {
        title: long_name,
        status: "publish",
        level: setSchoolLevel(long_name),
        fields: {
            long_name: long_name,
            short_name: short_name,
            address: address,
            fax: fax,
            telephone: telephone,
            admin_staff: admin_staff,
        },
        existingData: null,
    };
}
function formatTel(tel) {
    if (tel.length > 0 && tel.match("\\d")) {
        var correctPattern = new RegExp("^\\(\\d{3}\\)\\s*\\d{3}\\-\\d{4}$");
        var fixPattern = new RegExp("(\\(\\d{3}\\))?\\s*(\\d{3})\\-([\\d\\/\\-\\s]{4,})");
        if (tel.match(correctPattern)) {
            return tel;
        }
        else {
            var matches = tel.match(fixPattern);
            if (matches) {
                return "(670) " + matches[2] + "-" + matches[3];
            }
        }
    }
    return "";
}
function setSchoolLevel(name) {
    var headstartRE = new RegExp("Head", "i");
    var elemRE = new RegExp("Elem", "i");
    var middleRE = new RegExp("Middle", "i");
    var jrsrRE = new RegExp("jr", "i");
    var highRE = new RegExp("(High|Da'ok)", "i");
    var reList = [headstartRE, elemRE, middleRE, jrsrRE, highRE];
    var mapping = (_a = {},
        _a[headstartRE] = ["54"],
        _a[elemRE] = ["51"],
        _a[middleRE] = ["50"],
        _a[jrsrRE] = ["53"],
        _a[highRE] = ["52"],
        _a);
    return reList.filter(function (re) { return re.test(name); })
        .map(function (re) { return mapping[re]; })[0];
    var _a;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handlers_Configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/Configuration */ "./src/handlers/Configuration.ts");
/* harmony import */ var _handlers_personnel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/personnel */ "./src/handlers/personnel/index.ts");
/* harmony import */ var _handlers_offices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/offices */ "./src/handlers/offices/index.ts");
/* harmony import */ var _handlers_schools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/schools */ "./src/handlers/schools/index.ts");
/* harmony import */ var _handlers_headstarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/headstarts */ "./src/handlers/headstarts/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var config = new _handlers_Configuration__WEBPACK_IMPORTED_MODULE_0__["default"]("./contactUploader.json");
main();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(config.all || config.personnel)) return [3 /*break*/, 2];
                    return [4 /*yield*/, upload(_handlers_personnel__WEBPACK_IMPORTED_MODULE_1__["default"])];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(config.all || config.offices)) return [3 /*break*/, 4];
                    return [4 /*yield*/, upload(_handlers_offices__WEBPACK_IMPORTED_MODULE_2__["default"])];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(config.all || config.schools)) return [3 /*break*/, 6];
                    return [4 /*yield*/, upload(_handlers_schools__WEBPACK_IMPORTED_MODULE_3__["default"])];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(config.all || config.headstarts)) return [3 /*break*/, 8];
                    return [4 /*yield*/, upload(_handlers_headstarts__WEBPACK_IMPORTED_MODULE_4__["default"])];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
/**
 * Create a new instance of cls and use it to parse and post contact
 * information to the WordPress site.
 *
 * @param {*} cls
 */
function upload(Cls) {
    return __awaiter(this, void 0, void 0, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    records = new Cls(config);
                    return [4 /*yield*/, records.parse().catch(function (err) {
                            console.error("Failed to parse " + Cls.name.toLowerCase() + "\n", err);
                            console.log("Exiting...");
                            process.exit(1);
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, records.post().catch(function (err) {
                            console.error("Failed to post " + Cls.name.toLowerCase() + "\n", err);
                            console.log("Exiting...");
                            process.exit(1);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
//# sourceMappingURL=contactUploader.js.map