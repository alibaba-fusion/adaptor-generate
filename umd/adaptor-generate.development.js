(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom'), require('stream')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'stream'], factory) :
  (global = global || self, global.AdaptorGenerate = factory(global.React, global.ReactDOM, global.stream));
}(this, function (React$1, ReactDOM, stream) { 'use strict';

  var React$1__default = 'default' in React$1 ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  stream = stream && stream.hasOwnProperty('default') ? stream['default'] : stream;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
  60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
  exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
  exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
  exports.isSuspense=function(a){return t(a)===p};
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {



  {
    (function() {

  Object.defineProperty(exports, '__esModule', { value: true });

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;

  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' ||
    // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
  }

  /**
   * Forked from fbjs/warning:
   * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
   *
   * Only change is we use console.warn instead of console.error,
   * and do nothing when 'console' is not supported.
   * This really simplifies the code.
   * ---
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var lowPriorityWarning = function () {};

  {
    var printWarning = function (format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.warn(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    lowPriorityWarning = function (condition, format) {
      if (format === undefined) {
        throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  var lowPriorityWarning$1 = lowPriorityWarning;

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;
      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;
            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;
                default:
                  return $$typeof;
              }
          }
        case REACT_LAZY_TYPE:
        case REACT_MEMO_TYPE:
        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  }

  // AsyncMode is deprecated along with isAsyncMode
  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;

  var hasWarnedAboutDeprecatedIsAsyncMode = false;

  // AsyncMode should be deprecated
  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true;
        lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }
    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.typeOf = typeOf;
  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isValidElementType = isValidElementType;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
    })();
  }
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });
  var reactIs_1 = reactIs.isValidElementType;
  var reactIs_2 = reactIs.isElement;
  var reactIs_3 = reactIs.ForwardRef;

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
  });

  var STATE_MARK = {
    "-": "disabled",
    // tslint:disable-next-line:object-literal-sort-keys
    "*": "active",
    "~": "hover",
    "": "normal"
  };
  var STATE_PREFIX_MARK = {};
  Object.keys(STATE_MARK).forEach(function (key) {
    STATE_PREFIX_MARK[STATE_MARK[key]] = key;
  });

  var NodeType;

  (function (NodeType) {
    NodeType["divider"] = "divider";
    NodeType["node"] = "node";
    NodeType["comment"] = "comment";
  })(NodeType || (NodeType = {}));

  var ContentType;

  (function (ContentType) {
    ContentType["text"] = "text";
    ContentType["icon"] = "icon";
  })(ContentType || (ContentType = {}));

  var Types;

  (function (Types) {
    Types["enum"] = "enum";
    Types["string"] = "string";
    Types["number"] = "number";
    Types["bool"] = "bool";
    Types["node"] = "node";
    Types["nodeList"] = "node-list";
  })(Types || (Types = {}));

  var Types$1 = Types;

  var firstUpperCase = function firstUpperCase(str) {
    if (!str) {
      return "";
    }

    return [str.substring(0, 1).toUpperCase(), str.substring(1)].join("");
  };
  var toLabelWord = function toLabelWord(str) {
    return str.replace(/\B([A-Z])/g, "-$1").split(/[-|_]/).map(function (s) {
      return firstUpperCase(s);
    }).join(" ");
  };

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var normalizeOptions = function normalizeOptions() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return options.filter(function (v) {
      return !!v;
    }).map(function (item) {
      var value = item.value || item;
      return {
        value: value,
        label: item.label || toLabelWord(value)
      };
    });
  };

  var normalizeProps = function normalizeProps() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return props.filter(function (v) {
      return !!v;
    }).map(function (prop) {
      return _objectSpread({}, prop, {
        label: prop.label || toLabelWord(prop.name),
        options: normalizeOptions(prop.options)
      });
    });
  };

  var normalizeAdaptor = function normalizeAdaptor(adaptor) {
    if (!adaptor.name) {
      console.error("[error] muse be have name:");
      return adaptor;
    }

    var shape;

    if (!adaptor.shape || !Array.isArray(adaptor.shape) || adaptor.shape.length < 1) {
      shape = [{
        label: adaptor.name,
        value: "normal"
      }];
    } else {
      shape = adaptor.shape.filter(function (v) {
        return !!v;
      }).map(function (item) {
        var value = item.value || item;
        return {
          value: value,
          label: item.label || "".concat(toLabelWord(value), " ").concat(value === "normal" ? "" : adaptor.name)
        };
      });
    }

    var editor = function editor(s) {
      var p = adaptor.editor ? adaptor.editor(s) : {};

      if (!p.props) {
        p.props = [];
      }

      if (!p.nodes) {
        p.nodes = [];
      }

      return _objectSpread({}, p, {
        props: normalizeProps(p.props),
        nodes: normalizeProps(p.nodes)
      });
    };

    var content = function content(s) {
      var p = adaptor.content ? adaptor.content(s) : {};
      return _objectSpread({}, p, {
        options: normalizeProps(p.options)
      });
    };

    return _objectSpread({}, adaptor, {
      shape: shape,
      editor: editor,
      content: content
    });
  };
  var getDefaultProps = function getDefaultProps(adaptor, shape) {
    var p = adaptor.editor(shape);
    var props = {
      shape: shape,
      data: p.data && p.data["default"] || ""
    };
    p.props.forEach(function (item) {
      var defaultValue = item["default"];

      if (defaultValue === undefined || defaultValue === null) {
        switch (item.type) {
          case Types$1.string:
            defaultValue = "";
            break;

          case Types$1.number:
            defaultValue = 0;
            break;

          case Types$1.bool:
            defaultValue = false;
            break;

          case Types$1["enum"]:
            defaultValue = item.options ? item.options[0].value : "";
            break;

          default:
            break;
        }
      }

      props[item.name] = defaultValue;
    });
    p.nodes.forEach(function (_ref) {
      var name = _ref.name,
          defaultValue = _ref["default"];
      props[name] = defaultValue;
    });
    return props;
  };
  var findProp = function findProp(name) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return props.find(function (item) {
      return item.name === name;
    });
  };
  var findOptionLabel = function findOptionLabel(value, name) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var prop = findProp(name, props);

    if (prop && prop.type === Types$1["enum"]) {
      var option = (prop.options || []).find(function (item) {
        return item.value === value;
      });
      return option ? option.label : value;
    }

    return "";
  };
  var index = 1;
  var now = new Date().getTime();
  var uuid = function uuid() {
    return (now + index++).toString(16);
  };
  var getStates = function getStates() {
    var dataOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      "default": ""
    };
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var stateMap = {
      normal: true,
      hover: !!dataOption.hover,
      active: !!dataOption.active,
      disabled: !!dataOption.disable
    };
    var states = dataOption.generate === false ? null : Object.keys(stateMap).filter(function (key) {
      return stateMap[key];
    });
    var stateProp = findProp("state", props);

    if (stateProp) {
      states = (stateProp.options || []).map(function (_ref2) {
        var value = _ref2.value;
        return value;
      });
    }

    return states || ["normal"];
  };
  var generateDemos = function generateDemos(adaptor) {
    var demos = [];
    adaptor.shape.forEach(function (_ref3) {
      var value = _ref3.value;
      var editor = adaptor.editor(value);
      var sizeProp = findProp("size", editor.props);
      var stateProp = findProp("state", editor.props);
      var levelProp = findProp("level", editor.props);
      var states = getStates(editor.data, editor.props);
      var sizes = sizeProp && sizeProp.options ? sizeProp.options.map(function (_ref4) {
        var v = _ref4.value;
        return v;
      }) : ["medium"];
      var levels = levelProp && levelProp.options ? levelProp.options.map(function (_ref5) {
        var v = _ref5.value;
        return v;
      }) : ["normal"];
      states.forEach(function (state) {
        sizes.forEach(function (size) {
          levels.forEach(function (level) {
            var props = _objectSpread({}, getDefaultProps(adaptor, value));

            if (sizeProp) {
              props.size = size;
            }

            if (levelProp) {
              props.level = level;
            }

            if (states.length > 1) {
              if (stateProp) {
                props.state = state;
              } else {
                if (props.data && STATE_MARK[props.data.substring(0, 1)]) {
                  props.data = props.data.substring(1);
                }

                props.data = STATE_PREFIX_MARK[state] + props.data;
              }
            }

            var demo = {
              id: uuid(),
              node: {
                adaptor: adaptor.name,
                props: props
              }
            };
            demos.push(_objectSpread({}, demo, adaptor.demoOptions && adaptor.demoOptions(demo)));
          });
        });
      });
    });
    return demos;
  };
  var filterDemoState = function filterDemoState(state) {
    return function (_ref6) {
      var node = _ref6.node;
      var _node$props = node.props,
          props = _node$props === void 0 ? {} : _node$props;
      var _props$data = props.data,
          data = _props$data === void 0 ? "" : _props$data;
      var demoState = STATE_MARK[data.substring(0, 1)] || "normal";

      if (props.state) {
        demoState = props.state;
      }

      return demoState === state;
    };
  };

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var taggedTemplateLiteral = _taggedTemplateLiteral;

  var stylis_min = createCommonjsModule(function (module, exports) {
  !function(e){module.exports=e(null);}(function e(a){var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++;}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R);}C=W;}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze;}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s);}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++;}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe;}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue="";}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1);}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2));}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R);}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1;}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" ";}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m;}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1;}u++;}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T;}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0;}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0");}we=1;}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0";}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0";}}if(Te+=Re,C!==M&&C!==K)$=C;}}m=w,w=C,R++;}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" ";}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r;}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee;}n+=r;}i[s]=n.replace(c,"").trim();}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve;}ke=0;}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim();}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De;}}o[r++]=l;}s+=(0===i?"":",")+o.join(" ");}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h;}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o;}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r;}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a;}return e},Te.set=Re,void 0!==a)Re(a);return Te});

  });

  var stylisRuleSheet = createCommonjsModule(function (module, exports) {
  (function (factory) {
  	module['exports'] = factory();
  }(function () {

  	return function (insertRule) {
  		var delimiter = '/*|*/';
  		var needle = delimiter+'}';

  		function toSheet (block) {
  			if (block)
  				try {
  					insertRule(block + '}');
  				} catch (e) {}
  		}

  		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
  			switch (context) {
  				// property
  				case 1:
  					// @import
  					if (depth === 0 && content.charCodeAt(0) === 64)
  						return insertRule(content+';'), ''
  					break
  				// selector
  				case 2:
  					if (ns === 0)
  						return content + delimiter
  					break
  				// at-rule
  				case 3:
  					switch (ns) {
  						// @font-face, @page
  						case 102:
  						case 112:
  							return insertRule(selectors[0]+content), ''
  						default:
  							return content + (at === 0 ? delimiter : '')
  					}
  				case -2:
  					content.split(needle).forEach(toSheet);
  			}
  		}
  	}
  }));
  });

  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false;
    }

    for (var i = 0; i < newInputs.length; i++) {
      if (newInputs[i] !== lastInputs[i]) {
        return false;
      }
    }

    return true;
  }

  function index$1 (resultFn, isEqual) {
    if (isEqual === void 0) {
      isEqual = areInputsEqual;
    }

    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;

    var result = function result() {
      for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        newArgs[_key] = arguments[_key];
      }

      if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
        return lastResult;
      }

      lastResult = resultFn.apply(this, newArgs);
      calledOnce = true;
      lastThis = this;
      lastArgs = newArgs;
      return lastResult;
    };

    return result;
  }

  function memoize(fn) {
    var cache = {};
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var index$2 = memoize(function (prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
    /* o */
    && prop.charCodeAt(1) === 110
    /* n */
    && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
  );

  // 

  var interleave = (function (strings, interpolations) {
    var result = [strings[0]];

    for (var i = 0, len = interpolations.length; i < len; i += 1) {
      result.push(interpolations[i], strings[i + 1]);
    }

    return result;
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck$1 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass$1 = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits$1 = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn$1 = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  // 
  var isPlainObject = (function (x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
  });

  // 
  var EMPTY_ARRAY = Object.freeze([]);
  var EMPTY_OBJECT = Object.freeze({});

  // 
  function isFunction(test) {
    return typeof test === 'function';
  }

  // 

  function getComponentName(target) {
    return (typeof target === 'string' && target) || target.displayName || target.name || 'Component';
  }

  // 
  function isStatelessFunction(test) {
    return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
  }

  // 
  function isStyledComponent(target) {
    return target && typeof target.styledComponentId === 'string';
  }

  // 

  var SC_ATTR = typeof process !== 'undefined' && process.env.SC_ATTR || 'data-styled';

  var SC_VERSION_ATTR = 'data-styled-version';

  var SC_STREAM_ATTR = 'data-styled-streamed';

  var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

  var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || "development" !== 'production';

  // 


  /**
   * Parse errors.md and turn it into a simple hash of code: message
   */
  var ERRORS = {
    "1": "Cannot create styled-component for component: %s.\n\n",
    "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
    "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
    "9": "Missing document `<head>`\n\n",
    "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper (see https://www.styled-components.com/docs/api#css), which ensures the styles are injected correctly.\n\n",
    "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
  };

  /**
   * super basic version of sprintf
   */
  function format() {
    var a = arguments.length <= 0 ? undefined : arguments[0];
    var b = [];

    for (var c = 1, len = arguments.length; c < len; c += 1) {
      b.push(arguments.length <= c ? undefined : arguments[c]);
    }

    b.forEach(function (d) {
      a = a.replace(/%[a-z]/, d);
    });

    return a;
  }

  /**
   * Create an error file out of errors.md for development and a simple web link to the full errors
   * in production mode.
   */

  var StyledComponentsError = function (_Error) {
    inherits$1(StyledComponentsError, _Error);

    function StyledComponentsError(code) {
      classCallCheck$1(this, StyledComponentsError);

      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      if (false) {
        var _this;
      } else {
        var _this = possibleConstructorReturn$1(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
      }
      return possibleConstructorReturn$1(_this);
    }

    return StyledComponentsError;
  }(Error);

  // 
  var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

  var extractComps = (function (maybeCSS) {
    var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
    var existingComponents = [];
    css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
      existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
      return match;
    });
    return existingComponents.map(function (_ref, i) {
      var componentId = _ref.componentId,
          matchIndex = _ref.matchIndex;

      var nextComp = existingComponents[i + 1];
      var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
      return { componentId: componentId, cssFromDOM: cssFromDOM };
    });
  });

  // 

  var COMMENT_REGEX = /^\s*\/\/.*$/gm;

  // NOTE: This stylis instance is only used to split rules from SSR'd style tags
  var stylisSplitter = new stylis_min({
    global: false,
    cascade: true,
    keyframe: false,
    prefix: false,
    compress: false,
    semicolon: true
  });

  var stylis = new stylis_min({
    global: false,
    cascade: true,
    keyframe: false,
    prefix: true,
    compress: false,
    semicolon: false // NOTE: This means "autocomplete missing semicolons"
  });

  // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = [];

  // eslint-disable-next-line consistent-return
  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = stylisRuleSheet(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId = void 0;
  var _selector = void 0;
  var _selectorRegexp = void 0;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if (
    // the first self-ref is always untouched
    offset > 0 &&
    // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 &&
    // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return '.' + _componentId;
    }

    return match;
  };

  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   */
  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
  stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

  var splitByRules = function splitByRules(css) {
    return stylisSplitter('', css);
  };

  function stringifyRules(rules, selector, prefix) {
    var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

    var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

    var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

    // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run
    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  // 
  /* eslint-disable camelcase, no-undef */

  var getNonce = (function () {
    return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
  });

  // 
  /* These are helpers for the StyleTags to keep track of the injected
   * rule names for each (component) ID that they're keeping track of.
   * They're crucial for detecting whether a name has already been
   * injected.
   * (This excludes rehydrated names) */

  /* adds a new ID:name pairing to a names dictionary */
  var addNameForId = function addNameForId(names, id, name) {
    if (name) {
      // eslint-disable-next-line no-param-reassign
      var namesForId = names[id] || (names[id] = Object.create(null));
      namesForId[name] = true;
    }
  };

  /* resets an ID entirely by overwriting it in the dictionary */
  var resetIdNames = function resetIdNames(names, id) {
    // eslint-disable-next-line no-param-reassign
    names[id] = Object.create(null);
  };

  /* factory for a names dictionary checking the existance of an ID:name pairing */
  var hasNameForId = function hasNameForId(names) {
    return function (id, name) {
      return names[id] !== undefined && names[id][name];
    };
  };

  /* stringifies names for the html/element output */
  var stringifyNames = function stringifyNames(names) {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in names) {
      str += Object.keys(names[id]).join(' ') + ' ';
    }
    return str.trim();
  };

  /* clones the nested names dictionary */
  var cloneNames = function cloneNames(names) {
    var clone = Object.create(null);
    // eslint-disable-next-line guard-for-in
    for (var id in names) {
      clone[id] = _extends({}, names[id]);
    }
    return clone;
  };

  // 

  /* These are helpers that deal with the insertRule (aka speedy) API
   * They are used in the StyleTags and specifically the speedy tag
   */

  /* retrieve a sheet for a given style tag */
  var sheetForTag = function sheetForTag(tag) {
    // $FlowFixMe
    if (tag.sheet) return tag.sheet;

    /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
    var size = document.styleSheets.length;
    for (var i = 0; i < size; i += 1) {
      var sheet = document.styleSheets[i];
      // $FlowFixMe
      if (sheet.ownerNode === tag) return sheet;
    }

    /* we should always be able to find a tag */
    throw new StyledComponentsError(10);
  };

  /* insert a rule safely and return whether it was actually injected */
  var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
    /* abort early if cssRule string is falsy */
    if (!cssRule) return false;

    var maxIndex = sheet.cssRules.length;

    try {
      /* use insertRule and cap passed index with maxIndex (no of cssRules) */
      sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
    } catch (err) {
      /* any error indicates an invalid rule */
      return false;
    }

    return true;
  };

  /* deletes `size` rules starting from `removalIndex` */
  var deleteRules = function deleteRules(sheet, removalIndex, size) {
    var lowerBound = removalIndex - size;
    for (var i = removalIndex; i > lowerBound; i -= 1) {
      sheet.deleteRule(i);
    }
  };

  // 

  /* this marker separates component styles and is important for rehydration */
  var makeTextMarker = function makeTextMarker(id) {
    return '\n/* sc-component-id: ' + id + ' */\n';
  };

  /* add up all numbers in array up until and including the index */
  var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
    var totalUpToIndex = 0;
    for (var i = 0; i <= index; i += 1) {
      totalUpToIndex += sizes[i];
    }

    return totalUpToIndex;
  };

  /* create a new style tag after lastEl */
  var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
    var el = document.createElement('style');
    el.setAttribute(SC_ATTR, '');
    el.setAttribute(SC_VERSION_ATTR, "4.2.0");

    var nonce = getNonce();
    if (nonce) {
      el.setAttribute('nonce', nonce);
    }

    /* Work around insertRule quirk in EdgeHTML */
    el.appendChild(document.createTextNode(''));

    if (target && !tagEl) {
      /* Append to target when no previous element was passed */
      target.appendChild(el);
    } else {
      if (!tagEl || !target || !tagEl.parentNode) {
        throw new StyledComponentsError(6);
      }

      /* Insert new style tag after the previous one */
      tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
    }

    return el;
  };

  /* takes a css factory function and outputs an html styled tag factory */
  var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
    return function (additionalAttrs) {
      var nonce = getNonce();
      var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.2.0" + '"', additionalAttrs];

      var htmlAttr = attrs.filter(Boolean).join(' ');
      return '<style ' + htmlAttr + '>' + css() + '</style>';
    };
  };

  /* takes a css factory function and outputs an element factory */
  var wrapAsElement = function wrapAsElement(css, names) {
    return function () {
      var _props;

      var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.2.0", _props);

      var nonce = getNonce();
      if (nonce) {
        // $FlowFixMe
        props.nonce = nonce;
      }

      // eslint-disable-next-line react/no-danger
      return React$1__default.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
    };
  };

  var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
    return function () {
      return Object.keys(markers);
    };
  };

  /* speedy tags utilise insertRule */
  var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
    var names = Object.create(null);
    var markers = Object.create(null);
    var sizes = [];

    var extractImport = getImportRuleTag !== undefined;
    /* indicates whether getImportRuleTag was called */
    var usedImportRuleTag = false;

    var insertMarker = function insertMarker(id) {
      var prev = markers[id];
      if (prev !== undefined) {
        return prev;
      }

      markers[id] = sizes.length;
      sizes.push(0);
      resetIdNames(names, id);

      return markers[id];
    };

    var insertRules = function insertRules(id, cssRules, name) {
      var marker = insertMarker(id);
      var sheet = sheetForTag(el);
      var insertIndex = addUpUntilIndex(sizes, marker);

      var injectedRules = 0;
      var importRules = [];
      var cssRulesSize = cssRules.length;

      for (var i = 0; i < cssRulesSize; i += 1) {
        var cssRule = cssRules[i];
        var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
        if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
          importRules.push(cssRule);
        } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
          mayHaveImport = false;
          injectedRules += 1;
        }
      }

      if (extractImport && importRules.length > 0) {
        usedImportRuleTag = true;
        // $FlowFixMe
        getImportRuleTag().insertRules(id + '-import', importRules);
      }

      sizes[marker] += injectedRules; /* add up no of injected rules */
      addNameForId(names, id, name);
    };

    var removeRules = function removeRules(id) {
      var marker = markers[id];
      if (marker === undefined) return;

      var size = sizes[marker];
      var sheet = sheetForTag(el);
      var removalIndex = addUpUntilIndex(sizes, marker) - 1;
      deleteRules(sheet, removalIndex, size);
      sizes[marker] = 0;
      resetIdNames(names, id);

      if (extractImport && usedImportRuleTag) {
        // $FlowFixMe
        getImportRuleTag().removeRules(id + '-import');
      }
    };

    var css = function css() {
      var _sheetForTag = sheetForTag(el),
          cssRules = _sheetForTag.cssRules;

      var str = '';

      // eslint-disable-next-line guard-for-in
      for (var id in markers) {
        str += makeTextMarker(id);
        var marker = markers[id];
        var end = addUpUntilIndex(sizes, marker);
        var size = sizes[marker];
        for (var i = end - size; i < end; i += 1) {
          var rule = cssRules[i];
          if (rule !== undefined) {
            str += rule.cssText;
          }
        }
      }

      return str;
    };

    return {
      clone: function clone() {
        throw new StyledComponentsError(5);
      },

      css: css,
      getIds: getIdsFromMarkersFactory(markers),
      hasNameForId: hasNameForId(names),
      insertMarker: insertMarker,
      insertRules: insertRules,
      removeRules: removeRules,
      sealed: false,
      styleTag: el,
      toElement: wrapAsElement(css, names),
      toHTML: wrapAsHtmlTag(css, names)
    };
  };

  var makeTextNode = function makeTextNode(id) {
    return document.createTextNode(makeTextMarker(id));
  };

  var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
    var names = Object.create(null);
    var markers = Object.create(null);

    var extractImport = getImportRuleTag !== undefined;

    /* indicates whether getImportRuleTag was called */
    var usedImportRuleTag = false;

    var insertMarker = function insertMarker(id) {
      var prev = markers[id];
      if (prev !== undefined) {
        return prev;
      }

      markers[id] = makeTextNode(id);
      el.appendChild(markers[id]);
      names[id] = Object.create(null);

      return markers[id];
    };

    var insertRules = function insertRules(id, cssRules, name) {
      var marker = insertMarker(id);
      var importRules = [];
      var cssRulesSize = cssRules.length;

      for (var i = 0; i < cssRulesSize; i += 1) {
        var rule = cssRules[i];
        var mayHaveImport = extractImport;
        if (mayHaveImport && rule.indexOf('@import') !== -1) {
          importRules.push(rule);
        } else {
          mayHaveImport = false;
          var separator = i === cssRulesSize - 1 ? '' : ' ';
          marker.appendData('' + rule + separator);
        }
      }

      addNameForId(names, id, name);

      if (extractImport && importRules.length > 0) {
        usedImportRuleTag = true;
        // $FlowFixMe
        getImportRuleTag().insertRules(id + '-import', importRules);
      }
    };

    var removeRules = function removeRules(id) {
      var marker = markers[id];
      if (marker === undefined) return;

      /* create new empty text node and replace the current one */
      var newMarker = makeTextNode(id);
      el.replaceChild(newMarker, marker);
      markers[id] = newMarker;
      resetIdNames(names, id);

      if (extractImport && usedImportRuleTag) {
        // $FlowFixMe
        getImportRuleTag().removeRules(id + '-import');
      }
    };

    var css = function css() {
      var str = '';

      // eslint-disable-next-line guard-for-in
      for (var id in markers) {
        str += markers[id].data;
      }

      return str;
    };

    return {
      clone: function clone() {
        throw new StyledComponentsError(5);
      },

      css: css,
      getIds: getIdsFromMarkersFactory(markers),
      hasNameForId: hasNameForId(names),
      insertMarker: insertMarker,
      insertRules: insertRules,
      removeRules: removeRules,
      sealed: false,
      styleTag: el,
      toElement: wrapAsElement(css, names),
      toHTML: wrapAsHtmlTag(css, names)
    };
  };

  var makeServerTag = function makeServerTag(namesArg, markersArg) {
    var names = namesArg === undefined ? Object.create(null) : namesArg;
    var markers = markersArg === undefined ? Object.create(null) : markersArg;

    var insertMarker = function insertMarker(id) {
      var prev = markers[id];
      if (prev !== undefined) {
        return prev;
      }

      return markers[id] = [''];
    };

    var insertRules = function insertRules(id, cssRules, name) {
      var marker = insertMarker(id);
      marker[0] += cssRules.join(' ');
      addNameForId(names, id, name);
    };

    var removeRules = function removeRules(id) {
      var marker = markers[id];
      if (marker === undefined) return;
      marker[0] = '';
      resetIdNames(names, id);
    };

    var css = function css() {
      var str = '';
      // eslint-disable-next-line guard-for-in
      for (var id in markers) {
        var cssForId = markers[id][0];
        if (cssForId) {
          str += makeTextMarker(id) + cssForId;
        }
      }
      return str;
    };

    var clone = function clone() {
      var namesClone = cloneNames(names);
      var markersClone = Object.create(null);

      // eslint-disable-next-line guard-for-in
      for (var id in markers) {
        markersClone[id] = [markers[id][0]];
      }

      return makeServerTag(namesClone, markersClone);
    };

    var tag = {
      clone: clone,
      css: css,
      getIds: getIdsFromMarkersFactory(markers),
      hasNameForId: hasNameForId(names),
      insertMarker: insertMarker,
      insertRules: insertRules,
      removeRules: removeRules,
      sealed: false,
      styleTag: null,
      toElement: wrapAsElement(css, names),
      toHTML: wrapAsHtmlTag(css, names)
    };

    return tag;
  };

  var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
    if (IS_BROWSER && !forceServer) {
      var el = makeStyleTag(target, tagEl, insertBefore);

      if (DISABLE_SPEEDY) {
        return makeBrowserTag(el, getImportRuleTag);
      } else {
        return makeSpeedyTag(el, getImportRuleTag);
      }
    }

    return makeServerTag();
  };

  var rehydrate = function rehydrate(tag, els, extracted) {
    /* add all extracted components to the new tag */
    for (var i = 0, len = extracted.length; i < len; i += 1) {
      var _extracted$i = extracted[i],
          componentId = _extracted$i.componentId,
          cssFromDOM = _extracted$i.cssFromDOM;

      var cssRules = splitByRules(cssFromDOM);
      tag.insertRules(componentId, cssRules);
    }

    /* remove old HTMLStyleElements, since they have been rehydrated */
    for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
      var el = els[_i];
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  };

  // 

  var SPLIT_REGEX = /\s+/;

  /* determine the maximum number of components before tags are sharded */
  var MAX_SIZE = void 0;
  if (IS_BROWSER) {
    /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
    MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
  } else {
    /* for servers we do not need to shard at all */
    MAX_SIZE = -1;
  }

  var sheetRunningId = 0;
  var master = void 0;

  var StyleSheet = function () {

    /* a map from ids to tags */

    /* deferred rules for a given id */

    /* this is used for not reinjecting rules via hasNameForId() */

    /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

    /* a list of tags belonging to this StyleSheet */

    /* a tag for import rules */

    /* current capacity until a new tag must be created */

    /* children (aka clones) of this StyleSheet inheriting all and future injections */

    function StyleSheet() {
      var _this = this;

      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
      var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      classCallCheck$1(this, StyleSheet);

      this.getImportRuleTag = function () {
        var importRuleTag = _this.importRuleTag;

        if (importRuleTag !== undefined) {
          return importRuleTag;
        }

        var firstTag = _this.tags[0];
        var insertBefore = true;

        return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
      };

      sheetRunningId += 1;
      this.id = sheetRunningId;
      this.forceServer = forceServer;
      this.target = forceServer ? null : target;
      this.tagMap = {};
      this.deferred = {};
      this.rehydratedNames = {};
      this.ignoreRehydratedNames = {};
      this.tags = [];
      this.capacity = 1;
      this.clones = [];
    }

    /* rehydrate all SSR'd style tags */


    StyleSheet.prototype.rehydrate = function rehydrate$$1() {
      if (!IS_BROWSER || this.forceServer) return this;

      var els = [];
      var extracted = [];
      var isStreamed = false;

      /* retrieve all of our SSR style elements from the DOM */
      var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.2.0" + '"]');

      var nodesSize = nodes.length;

      /* abort rehydration if no previous style tags were found */
      if (!nodesSize) return this;

      for (var i = 0; i < nodesSize; i += 1) {
        var el = nodes[i];

        /* check if style tag is a streamed tag */
        if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

        /* retrieve all component names */
        var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
        var elNamesSize = elNames.length;
        for (var j = 0, name; j < elNamesSize; j += 1) {
          name = elNames[j];
          /* add rehydrated name to sheet to avoid re-adding styles */
          this.rehydratedNames[name] = true;
        }

        /* extract all components and their CSS */
        extracted.push.apply(extracted, extractComps(el.textContent));

        /* store original HTMLStyleElement */
        els.push(el);
      }

      /* abort rehydration if nothing was extracted */
      var extractedSize = extracted.length;
      if (!extractedSize) return this;

      /* create a tag to be used for rehydration */
      var tag = this.makeTag(null);

      rehydrate(tag, els, extracted);

      /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
      this.capacity = Math.max(1, MAX_SIZE - extractedSize);
      this.tags.push(tag);

      /* retrieve all component ids */
      for (var _j = 0; _j < extractedSize; _j += 1) {
        this.tagMap[extracted[_j].componentId] = tag;
      }

      return this;
    };

    /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
     * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
      * StyleSheetManager's context */


    /* reset the internal "master" instance */
    StyleSheet.reset = function reset() {
      var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      master = new StyleSheet(undefined, forceServer).rehydrate();
    };

    /* adds "children" to the StyleSheet that inherit all of the parents' rules
     * while their own rules do not affect the parent */


    StyleSheet.prototype.clone = function clone() {
      var sheet = new StyleSheet(this.target, this.forceServer);

      /* add to clone array */
      this.clones.push(sheet);

      /* clone all tags */
      sheet.tags = this.tags.map(function (tag) {
        var ids = tag.getIds();
        var newTag = tag.clone();

        /* reconstruct tagMap */
        for (var i = 0; i < ids.length; i += 1) {
          sheet.tagMap[ids[i]] = newTag;
        }

        return newTag;
      });

      /* clone other maps */
      sheet.rehydratedNames = _extends({}, this.rehydratedNames);
      sheet.deferred = _extends({}, this.deferred);

      return sheet;
    };

    /* force StyleSheet to create a new tag on the next injection */


    StyleSheet.prototype.sealAllTags = function sealAllTags() {
      this.capacity = 1;

      this.tags.forEach(function (tag) {
        // eslint-disable-next-line no-param-reassign
        tag.sealed = true;
      });
    };

    StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
      var lastEl = tag ? tag.styleTag : null;
      var insertBefore = false;

      return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
    };

    /* get a tag for a given componentId, assign the componentId to one, or shard */
    StyleSheet.prototype.getTagForId = function getTagForId(id) {
      /* simply return a tag, when the componentId was already assigned one */
      var prev = this.tagMap[id];
      if (prev !== undefined && !prev.sealed) {
        return prev;
      }

      var tag = this.tags[this.tags.length - 1];

      /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
      this.capacity -= 1;

      if (this.capacity === 0) {
        this.capacity = MAX_SIZE;
        tag = this.makeTag(tag);
        this.tags.push(tag);
      }

      return this.tagMap[id] = tag;
    };

    /* mainly for createGlobalStyle to check for its id */


    StyleSheet.prototype.hasId = function hasId(id) {
      return this.tagMap[id] !== undefined;
    };

    /* caching layer checking id+name to already have a corresponding tag and injected rules */


    StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
      /* exception for rehydrated names which are checked separately */
      if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
        return true;
      }

      var tag = this.tagMap[id];
      return tag !== undefined && tag.hasNameForId(id, name);
    };

    /* registers a componentId and registers it on its tag */


    StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
      /* don't inject when the id is already registered */
      if (this.tagMap[id] !== undefined) return;

      var clones = this.clones;

      for (var i = 0; i < clones.length; i += 1) {
        clones[i].deferredInject(id, cssRules);
      }

      this.getTagForId(id).insertMarker(id);
      this.deferred[id] = cssRules;
    };

    /* injects rules for a given id with a name that will need to be cached */


    StyleSheet.prototype.inject = function inject(id, cssRules, name) {
      var clones = this.clones;


      for (var i = 0; i < clones.length; i += 1) {
        clones[i].inject(id, cssRules, name);
      }

      var tag = this.getTagForId(id);

      /* add deferred rules for component */
      if (this.deferred[id] !== undefined) {
        // Combine passed cssRules with previously deferred CSS rules
        // NOTE: We cannot mutate the deferred array itself as all clones
        // do the same (see clones[i].inject)
        var rules = this.deferred[id].concat(cssRules);
        tag.insertRules(id, rules, name);

        this.deferred[id] = undefined;
      } else {
        tag.insertRules(id, cssRules, name);
      }
    };

    /* removes all rules for a given id, which doesn't remove its marker but resets it */


    StyleSheet.prototype.remove = function remove(id) {
      var tag = this.tagMap[id];
      if (tag === undefined) return;

      var clones = this.clones;

      for (var i = 0; i < clones.length; i += 1) {
        clones[i].remove(id);
      }

      /* remove all rules from the tag */
      tag.removeRules(id);

      /* ignore possible rehydrated names */
      this.ignoreRehydratedNames[id] = true;

      /* delete possible deferred rules */
      this.deferred[id] = undefined;
    };

    StyleSheet.prototype.toHTML = function toHTML() {
      return this.tags.map(function (tag) {
        return tag.toHTML();
      }).join('');
    };

    StyleSheet.prototype.toReactElements = function toReactElements() {
      var id = this.id;


      return this.tags.map(function (tag, i) {
        var key = 'sc-' + id + '-' + i;
        return React$1.cloneElement(tag.toElement(), { key: key });
      });
    };

    createClass$1(StyleSheet, null, [{
      key: 'master',
      get: function get$$1() {
        return master || (master = new StyleSheet().rehydrate());
      }

      /* NOTE: This is just for backwards-compatibility with jest-styled-components */

    }, {
      key: 'instance',
      get: function get$$1() {
        return StyleSheet.master;
      }
    }]);
    return StyleSheet;
  }();

  // 

  var Keyframes = function () {
    function Keyframes(name, rules) {
      var _this = this;

      classCallCheck$1(this, Keyframes);

      this.inject = function (styleSheet) {
        if (!styleSheet.hasNameForId(_this.id, _this.name)) {
          styleSheet.inject(_this.id, _this.rules, _this.name);
        }
      };

      this.toString = function () {
        throw new StyledComponentsError(12, String(_this.name));
      };

      this.name = name;
      this.rules = rules;

      this.id = 'sc-keyframes-' + name;
    }

    Keyframes.prototype.getName = function getName() {
      return this.name;
    };

    return Keyframes;
  }();

  // 

  /**
   * inlined version of
   * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
   */

  var uppercasePattern = /([A-Z])/g;
  var msPattern = /^ms-/;

  /**
   * Hyphenates a camelcased CSS property name, for example:
   *
   *   > hyphenateStyleName('backgroundColor')
   *   < "background-color"
   *   > hyphenateStyleName('MozTransition')
   *   < "-moz-transition"
   *   > hyphenateStyleName('msTransition')
   *   < "-ms-transition"
   *
   * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
   * is converted to `-ms-`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenateStyleName(string) {
    return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
  }

  // 

  // Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
  function addUnitIfNeeded(name, value) {
    // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
    // $FlowFixMe
    if (value == null || typeof value === 'boolean' || value === '') {
      return '';
    }

    if (typeof value === 'number' && value !== 0 && !(name in unitlessKeys)) {
      return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
    }

    return String(value).trim();
  }

  // 

  /**
   * It's falsish not falsy because 0 is allowed.
   */
  var isFalsish = function isFalsish(chunk) {
    return chunk === undefined || chunk === null || chunk === false || chunk === '';
  };

  var objToCss = function objToCss(obj, prevKey) {
    var css = Object.keys(obj).filter(function (key) {
      return !isFalsish(obj[key]);
    }).map(function (key) {
      if (isPlainObject(obj[key])) return objToCss(obj[key], key);
      return hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';';
    }).join(' ');
    return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
  };

  function flatten(chunk, executionContext, styleSheet) {
    if (Array.isArray(chunk)) {
      var ruleSet = [];

      for (var i = 0, len = chunk.length, result; i < len; i += 1) {
        result = flatten(chunk[i], executionContext, styleSheet);

        if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
      }

      return ruleSet;
    }

    if (isFalsish(chunk)) {
      return null;
    }

    /* Handle other components */
    if (isStyledComponent(chunk)) {
      return '.' + chunk.styledComponentId;
    }

    /* Either execute or defer the function */
    if (isFunction(chunk)) {
      if (isStatelessFunction(chunk) && executionContext) {
        var _result = chunk(executionContext);

        if (reactIs_2(_result)) {
          // eslint-disable-next-line no-console
          console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
        }

        return flatten(_result, executionContext, styleSheet);
      } else return chunk;
    }

    if (chunk instanceof Keyframes) {
      if (styleSheet) {
        chunk.inject(styleSheet);
        return chunk.getName();
      } else return chunk;
    }

    /* Handle objects */
    return isPlainObject(chunk) ? objToCss(chunk) : chunk.toString();
  }

  // 

  function css(styles) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (isFunction(styles) || isPlainObject(styles)) {
      // $FlowFixMe
      return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
    }

    // $FlowFixMe
    return flatten(interleave(styles, interpolations));
  }

  // 

  function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

    if (!reactIs_1(tag)) {
      throw new StyledComponentsError(1, String(tag));
    }

    /* This is callable directly as a template function */
    // $FlowFixMe: Not typed to avoid destructuring arguments
    var templateFunction = function templateFunction() {
      return componentConstructor(tag, options, css.apply(undefined, arguments));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };

    /* Modify/inject new props at runtime */
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
      }));
    };

    return templateFunction;
  }

  // 
  // Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
  function murmurhash(c) {
    for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
      b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
    }
    switch (e) {
      case 3:
        a ^= (c.charCodeAt(d + 2) & 255) << 16;
      case 2:
        a ^= (c.charCodeAt(d + 1) & 255) << 8;
      case 1:
        a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
    }
    a ^= a >>> 13;
    a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
    return (a ^ a >>> 15) >>> 0;
  }

  // 
  /* eslint-disable no-bitwise */

  /* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
   * counterparts */
  var charsLength = 52;

  /* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
  var getAlphabeticChar = function getAlphabeticChar(code) {
    return String.fromCharCode(code + (code > 25 ? 39 : 97));
  };

  /* input a number, usually a hash and convert it to base-52 */
  function generateAlphabeticName(code) {
    var name = '';
    var x = void 0;

    /* get a char and divide by alphabet-length */
    for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
      name = getAlphabeticChar(x % charsLength) + name;
    }

    return getAlphabeticChar(x % charsLength) + name;
  }

  // 

  function hasFunctionObjectKey(obj) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in obj) {
      if (isFunction(obj[key])) {
        return true;
      }
    }

    return false;
  }

  function isStaticRules(rules, attrs) {
    for (var i = 0; i < rules.length; i += 1) {
      var rule = rules[i];

      // recursive case
      if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
        return false;
      } else if (isFunction(rule) && !isStyledComponent(rule)) {
        // functions are allowed to be static if they're just being
        // used to get the classname of a nested styled component
        return false;
      }
    }

    if (attrs.some(function (x) {
      return isFunction(x) || hasFunctionObjectKey(x);
    })) return false;

    return true;
  }

  // 

  var isHMREnabled = typeof module !== 'undefined' && module.hot;

  /* combines hashStr (murmurhash) and nameGenerator for convenience */
  var hasher = function hasher(str) {
    return generateAlphabeticName(murmurhash(str));
  };

  /*
   ComponentStyle is all the CSS-specific stuff, not
   the React-specific stuff.
   */

  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck$1(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;

      if (!StyleSheet.master.hasId(componentId)) {
        StyleSheet.master.deferredInject(componentId, []);
      }
    }

    /*
       * Flattens a rule set into valid CSS
       * Hashes it, wraps the whole chunk in a .hash1234 {}
       * Returns the hash to be injected on render()
       * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          componentId = this.componentId,
          lastClassName = this.lastClassName;

      if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext, styleSheet);
      var name = hasher(this.componentId + flatCSS.join(''));
      if (!styleSheet.hasNameForId(componentId, name)) {
        styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
      }

      this.lastClassName = name;
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return hasher(str);
    };

    return ComponentStyle;
  }();

  // 

  var LIMIT = 200;

  var createWarnTooManyClasses = (function (displayName) {
    var generatedClasses = {};
    var warningSeen = false;

    return function (className) {
      if (!warningSeen) {
        generatedClasses[className] = true;
        if (Object.keys(generatedClasses).length >= LIMIT) {
          // Unable to find latestRule in test environment.
          /* eslint-disable no-console, prefer-template */
          console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
          warningSeen = true;
          generatedClasses = {};
        }
      }
    };
  });

  // 

  var determineTheme = (function (props, fallbackTheme) {
    var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

    // Props should take precedence over ThemeProvider, which should take precedence over
    // defaultProps, but React automatically puts defaultProps on props.

    /* eslint-disable react/prop-types, flowtype-errors/show-errors */
    var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
    var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
    /* eslint-enable */

    return theme;
  });

  // 
  var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
  var dashesAtEnds = /(^-|-$)/g;

  /**
   * TODO: Explore using CSS.escape when it becomes more available
   * in evergreen browsers.
   */
  function escape(str) {
    return str
    // Replace all possible CSS selectors
    .replace(escapeRegex, '-')

    // Remove extraneous hyphens at the start and end
    .replace(dashesAtEnds, '');
  }

  // 

  function isTag(target) {
    return typeof target === 'string' && (target.charAt(0) === target.charAt(0).toLowerCase());
  }

  // 

  function generateDisplayName(target) {
    // $FlowFixMe
    return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
  }

  var _TYPE_STATICS;

  var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDerivedStateFromProps: true,
    propTypes: true,
    type: true
  };

  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };

  var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[reactIs_3] = {
    $$typeof: true,
    render: true
  }, _TYPE_STATICS);

  var defineProperty$1 = Object.defineProperty,
      getOwnPropertyNames = Object.getOwnPropertyNames,
      _Object$getOwnPropert = Object.getOwnPropertySymbols,
      getOwnPropertySymbols$1 = _Object$getOwnPropert === undefined ? function () {
    return [];
  } : _Object$getOwnPropert,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
      getPrototypeOf$1 = Object.getPrototypeOf,
      objectPrototype = Object.prototype;
  var arrayPrototype = Array.prototype;


  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components

      var inheritedComponent = getPrototypeOf$1(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }

      var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
      // $FlowFixMe
      getOwnPropertySymbols$1(sourceComponent));

      var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

      var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

      var i = keys.length;
      var descriptor = void 0;
      var key = void 0;

      // eslint-disable-next-line no-plusplus
      while (i--) {
        key = keys[i];

        if (
        // $FlowFixMe
        !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
        // $FlowFixMe
        !(targetStatics && targetStatics[key])) {
          descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          if (descriptor) {
            try {
              // Avoid failures from read-only properties
              defineProperty$1(targetComponent, key, descriptor);
            } catch (e) {
              /* fail silently */
            }
          }
        }
      }

      return targetComponent;
    }

    return targetComponent;
  }

  // 
  function isDerivedReactComponent(fn) {
    return !!(fn && fn.prototype && fn.prototype.isReactComponent);
  }

  // 
  // Helper to call a given function, only once
  var once = (function (cb) {
    var called = false;

    return function () {
      if (!called) {
        called = true;
        cb.apply(undefined, arguments);
      }
    };
  });

  // 

  var ThemeContext = React$1.createContext();

  var ThemeConsumer = ThemeContext.Consumer;

  /**
   * Provide a theme to an entire react component tree via context
   */

  var ThemeProvider = function (_Component) {
    inherits$1(ThemeProvider, _Component);

    function ThemeProvider(props) {
      classCallCheck$1(this, ThemeProvider);

      var _this = possibleConstructorReturn$1(this, _Component.call(this, props));

      _this.getContext = index$1(_this.getContext.bind(_this));
      _this.renderInner = _this.renderInner.bind(_this);
      return _this;
    }

    ThemeProvider.prototype.render = function render() {
      if (!this.props.children) return null;

      return React$1__default.createElement(
        ThemeContext.Consumer,
        null,
        this.renderInner
      );
    };

    ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
      var context = this.getContext(this.props.theme, outerTheme);

      return React$1__default.createElement(
        ThemeContext.Provider,
        { value: context },
        React$1__default.Children.only(this.props.children)
      );
    };

    /**
     * Get the theme from the props, supporting both (outerTheme) => {}
     * as well as object notation
     */


    ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
      if (isFunction(theme)) {
        var mergedTheme = theme(outerTheme);

        if (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object') {
          throw new StyledComponentsError(7);
        }

        return mergedTheme;
      }

      if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
        throw new StyledComponentsError(8);
      }

      return _extends({}, outerTheme, theme);
    };

    ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
      return this.getTheme(theme, outerTheme);
    };

    return ThemeProvider;
  }(React$1.Component);

  // 

  var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

  var ServerStyleSheet = function () {
    function ServerStyleSheet() {
      classCallCheck$1(this, ServerStyleSheet);

      /* The master sheet might be reset, so keep a reference here */
      this.masterSheet = StyleSheet.master;
      this.instance = this.masterSheet.clone();
      this.sealed = false;
    }

    /**
     * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
     * StyleSheet singleton.
     */


    ServerStyleSheet.prototype.seal = function seal() {
      if (!this.sealed) {
        /* Remove sealed StyleSheets from the master sheet */
        var index = this.masterSheet.clones.indexOf(this.instance);
        this.masterSheet.clones.splice(index, 1);
        this.sealed = true;
      }
    };

    ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
      if (this.sealed) {
        throw new StyledComponentsError(2);
      }

      return React$1__default.createElement(
        StyleSheetManager,
        { sheet: this.instance },
        children
      );
    };

    ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
      this.seal();
      return this.instance.toHTML();
    };

    ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
      this.seal();
      return this.instance.toReactElements();
    };

    ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
      var _this = this;

      if (IS_BROWSER) {
        throw new StyledComponentsError(3);
      }

      /* the tag index keeps track of which tags have already been emitted */
      var instance = this.instance;

      var instanceTagIndex = 0;

      var streamAttr = SC_STREAM_ATTR + '="true"';

      var transformer = new stream.Transform({
        transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
          var tags = instance.tags;

          var html = '';

          /* retrieve html for each new style tag */
          for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
            var tag = tags[instanceTagIndex];
            html += tag.toHTML(streamAttr);
          }

          /* force our StyleSheets to emit entirely new tags */
          instance.sealAllTags();

          var renderedHtml = chunk.toString();

          /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
          if (CLOSING_TAG_R.test(renderedHtml)) {
            var endOfClosingTag = renderedHtml.indexOf('>');

            this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
          } else this.push(html + renderedHtml);

          callback();
        }
      });

      readableStream.on('end', function () {
        return _this.seal();
      });

      readableStream.on('error', function (err) {
        _this.seal();

        // forward the error to the transform stream
        transformer.emit('error', err);
      });

      return readableStream.pipe(transformer);
    };

    return ServerStyleSheet;
  }();

  // 

  var StyleSheetContext = React$1.createContext();
  var StyleSheetConsumer = StyleSheetContext.Consumer;

  var StyleSheetManager = function (_Component) {
    inherits$1(StyleSheetManager, _Component);

    function StyleSheetManager(props) {
      classCallCheck$1(this, StyleSheetManager);

      var _this = possibleConstructorReturn$1(this, _Component.call(this, props));

      _this.getContext = index$1(_this.getContext);
      return _this;
    }

    StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
      if (sheet) {
        return sheet;
      } else if (target) {
        return new StyleSheet(target);
      } else {
        throw new StyledComponentsError(4);
      }
    };

    StyleSheetManager.prototype.render = function render() {
      var _props = this.props,
          children = _props.children,
          sheet = _props.sheet,
          target = _props.target;


      return React$1__default.createElement(
        StyleSheetContext.Provider,
        { value: this.getContext(sheet, target) },
        React$1__default.Children.only(children)
      );
    };

    return StyleSheetManager;
  }(React$1.Component);
  StyleSheetManager.propTypes = {
    sheet: propTypes.oneOfType([propTypes.instanceOf(StyleSheet), propTypes.instanceOf(ServerStyleSheet)]),

    target: propTypes.shape({
      appendChild: propTypes.func.isRequired
    })
  };

  // 

  var didWarnAboutClassNameUsage = new Set();

  var classNameUsageCheckInjector = (function (target) {
    var elementClassName = '';

    var targetCDM = target.componentDidMount;

    // eslint-disable-next-line no-param-reassign
    target.componentDidMount = function componentDidMount() {
      if (typeof targetCDM === 'function') {
        targetCDM.call(this);
      }

      var forwardTarget = this.props.forwardedComponent.target;

      if (target.props && target.props.suppressClassNameWarning || target.attrs && target.attrs.suppressClassNameWarning || didWarnAboutClassNameUsage.has(forwardTarget)) {
        return;
      }

      didWarnAboutClassNameUsage.add(forwardTarget);

      var classNames = elementClassName.replace(/\s+/g, ' ').trim().split(' ');
      // eslint-disable-next-line react/no-find-dom-node
      var node = ReactDOM.findDOMNode(this);
      var selector = classNames.map(function (s) {
        return '.' + s;
      }).join('');

      if (node && node.nodeType === 1 && !classNames.every(function (className) {
        return node.classList && node.classList.contains(className);
      }) && !node.querySelector(selector)) {
        // eslint-disable-next-line no-console
        console.warn('It looks like you\'ve wrapped styled() around your React component (' + getComponentName(forwardTarget) + '), but the className prop is not being passed down to a child. No styles will be rendered unless className is composed within your React component.');
      }
    };

    var prevRenderInner = target.renderInner;

    // eslint-disable-next-line no-param-reassign
    target.renderInner = function renderInner() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var element = prevRenderInner.apply(this, args);

      elementClassName = element.props.className;

      return element;
    };
  });

  // 

  var identifiers = {};

  /* We depend on components having unique IDs */
  function generateId(_ComponentStyle, _displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

    /**
     * This ensures uniqueness if two components happen to share
     * the same displayName.
     */
    var nr = (identifiers[displayName] || 0) + 1;
    identifiers[displayName] = nr;

    var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

    return parentComponentId ? parentComponentId + '-' + componentId : componentId;
  }

  // $FlowFixMe

  var StyledComponent = function (_Component) {
    inherits$1(StyledComponent, _Component);

    function StyledComponent() {
      classCallCheck$1(this, StyledComponent);

      var _this = possibleConstructorReturn$1(this, _Component.call(this));

      _this.attrs = {};

      _this.renderOuter = _this.renderOuter.bind(_this);
      _this.renderInner = _this.renderInner.bind(_this);

      {
        _this.warnInnerRef = once(function (displayName) {
          return (
            // eslint-disable-next-line no-console
            console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
          );
        });

        _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
          return (
            // eslint-disable-next-line no-console
            console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".')
          );
        });

        _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
          return (
            // eslint-disable-next-line no-console
            console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
          );
        });
      }

      if (IS_BROWSER) {
        classNameUsageCheckInjector(_this);
      }
      return _this;
    }

    StyledComponent.prototype.render = function render() {
      return React$1__default.createElement(
        StyleSheetConsumer,
        null,
        this.renderOuter
      );
    };

    StyledComponent.prototype.renderOuter = function renderOuter() {
      var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

      this.styleSheet = styleSheet;

      // No need to subscribe a static component to theme changes, it won't change anything
      if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

      return React$1__default.createElement(
        ThemeConsumer,
        null,
        this.renderInner
      );
    };

    StyledComponent.prototype.renderInner = function renderInner(theme) {
      var _props$forwardedCompo = this.props.forwardedComponent,
          componentStyle = _props$forwardedCompo.componentStyle,
          defaultProps = _props$forwardedCompo.defaultProps,
          displayName = _props$forwardedCompo.displayName,
          foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
          styledComponentId = _props$forwardedCompo.styledComponentId,
          target = _props$forwardedCompo.target;


      var generatedClassName = void 0;
      if (componentStyle.isStatic) {
        generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
      } else if (theme !== undefined) {
        generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps), this.props);
      } else {
        generatedClassName = this.generateAndInjectStyles(this.props.theme || EMPTY_OBJECT, this.props);
      }

      var elementToBeCreated = this.props.as || this.attrs.as || target;
      var isTargetTag = isTag(elementToBeCreated);

      var propsForElement = {};
      var computedProps = _extends({}, this.attrs, this.props);

      var key = void 0;
      // eslint-disable-next-line guard-for-in
      for (key in computedProps) {
        if (key === 'innerRef' && isTargetTag) {
          this.warnInnerRef(displayName);
        }

        if (key === 'forwardedComponent' || key === 'as' || key === 'suppressClassNameWarning') {
          continue;
        } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (!isTargetTag || index$2(key)) {
          // Don't pass through non HTML tags through to HTML elements
          propsForElement[key] = computedProps[key];
        }
      }

      if (this.props.style && this.attrs.style) {
        propsForElement.style = _extends({}, this.attrs.style, this.props.style);
      }

      propsForElement.className = Array.prototype.concat(foldedComponentIds, this.props.className, styledComponentId, this.attrs.className, generatedClassName).filter(Boolean).join(' ');

      return React$1.createElement(elementToBeCreated, propsForElement);
    };

    StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
      var _this2 = this;

      var context = _extends({}, props, { theme: theme });

      if (!attrs.length) return context;

      this.attrs = {};

      attrs.forEach(function (attrDef) {
        var resolvedAttrDef = attrDef;
        var attrDefWasFn = false;
        var attr = void 0;
        var key = void 0;

        if (isFunction(resolvedAttrDef)) {
          // $FlowFixMe
          resolvedAttrDef = resolvedAttrDef(context);
          attrDefWasFn = true;
        }

        /* eslint-disable guard-for-in */
        // $FlowFixMe
        for (key in resolvedAttrDef) {
          attr = resolvedAttrDef[key];

          if (!attrDefWasFn) {
            if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
              {
                _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
              }

              attr = attr(context);

              if (React$1__default.isValidElement(attr)) {
                _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
              }
            }
          }

          _this2.attrs[key] = attr;
          context[key] = attr;
        }
        /* eslint-enable */
      });

      return context;
    };

    StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _props$forwardedCompo2 = props.forwardedComponent,
          attrs = _props$forwardedCompo2.attrs,
          componentStyle = _props$forwardedCompo2.componentStyle,
          warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

      // statically styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names

      if (componentStyle.isStatic && !attrs.length) {
        return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
      }

      var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

      if (warnTooManyClasses) warnTooManyClasses(className);

      return className;
    };

    return StyledComponent;
  }(React$1.Component);

  function createStyledComponent(target, options, rules) {
    var isTargetStyledComp = isStyledComponent(target);
    var isClass = !isTag(target);

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
        _options$attrs = options.attrs,
        attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

    // fold the underlying StyledComponent attrs up (implicit extend)
    var finalAttrs =
    // $FlowFixMe
    isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

    var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
    // $FlowFixMe
    target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

    /**
     * forwardRef creates a new interim component, which we'll take advantage of
     * instead of extending ParentComponent to create _another_ interim class
     */
    var WrappedStyledComponent = React$1__default.forwardRef(function (props, ref) {
      return React$1__default.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
    });

    // $FlowFixMe
    WrappedStyledComponent.attrs = finalAttrs;
    // $FlowFixMe
    WrappedStyledComponent.componentStyle = componentStyle;
    WrappedStyledComponent.displayName = displayName;

    // $FlowFixMe
    WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
    Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

    // $FlowFixMe
    WrappedStyledComponent.styledComponentId = styledComponentId;

    // fold the underlying StyledComponent target up since we folded the styles
    // $FlowFixMe
    WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

    // $FlowFixMe
    WrappedStyledComponent.withComponent = function withComponent(tag) {
      var previousComponentId = options.componentId,
          optionsToCopy = objectWithoutProperties(options, ['componentId']);


      var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

      var newOptions = _extends({}, optionsToCopy, {
        attrs: finalAttrs,
        componentId: newComponentId,
        ParentComponent: ParentComponent
      });

      return createStyledComponent(tag, newOptions, rules);
    };

    {
      // $FlowFixMe
      WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    // $FlowFixMe
    WrappedStyledComponent.toString = function () {
      return '.' + WrappedStyledComponent.styledComponentId;
    };

    if (isClass) {
      hoistNonReactStatics(WrappedStyledComponent, target, {
        // all SC-specific things should not be hoisted
        attrs: true,
        componentStyle: true,
        displayName: true,
        foldedComponentIds: true,
        styledComponentId: true,
        target: true,
        withComponent: true
      });
    }

    return WrappedStyledComponent;
  }

  // 
  // Thanks to ReactDOMFactories for this handy list!

  var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

  // SVG
  'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

  // 

  var styled = function styled(tag) {
    return constructWithOptions(createStyledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  // 

  var GlobalStyle = function () {
    function GlobalStyle(rules, componentId) {
      classCallCheck$1(this, GlobalStyle);

      this.rules = rules;
      this.componentId = componentId;
      this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

      if (!StyleSheet.master.hasId(componentId)) {
        StyleSheet.master.deferredInject(componentId, []);
      }
    }

    GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
      var flatCSS = flatten(this.rules, executionContext, styleSheet);
      var css = stringifyRules(flatCSS, '');

      styleSheet.inject(this.componentId, css);
    };

    GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
      var componentId = this.componentId;

      if (styleSheet.hasId(componentId)) {
        styleSheet.remove(componentId);
      }
    };

    // TODO: overwrite in-place instead of remove+create?


    GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
      this.removeStyles(styleSheet);
      this.createStyles(executionContext, styleSheet);
    };

    return GlobalStyle;
  }();

  // 

  // place our cache into shared context so it'll persist between HMRs
  if (IS_BROWSER) {
    window.scCGSHMRCache = {};
  }

  // 

  /* Warning if you've imported this file on React Native */
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
  }

  /* Warning if there are several instances of styled-components */
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
    window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

    if (window['__styled-components-init__'] === 1) {
      // eslint-disable-next-line no-console
      console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
    }

    window['__styled-components-init__'] += 1;
  }

  function _templateObject() {
    var data = taggedTemplateLiteral(["\n  border: 1px solid #e6e7eb;\n  .demo-shape {\n    margin-bottom: 20px;\n  }\n\n  .demo-header {\n    padding: 10px 15px;\n    background-color: #e6e7eb;\n    font-size: 18px;\n    /* border-top-left-radius: 3px;\n    border-top-right-radius: 3px; */\n    color: #333;\n  }\n\n  .demo-content-filter {\n    background-color: #fff;\n    border-bottom: 1px solid #ccc;\n    padding: 10px 20px;\n    margin: 0;\n    list-style: none;\n    font-size: 12px;\n    color: #666;\n    li {\n      display: flex;\n      margin: 6px 0;\n      height: 20px;\n      line-height: 20px;\n      justify-content: flex-start;\n      align-items: center;\n    }\n    span {\n      display: inline-block;\n      padding-right: 12px;\n      width: 124px;\n      font-weight: 700;\n      text-align: right;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n\n    label {\n      margin-right: 24px;\n    }\n\n    input {\n      margin-right: 4px;\n    }\n  }\n\n  .demo-section {\n    border-bottom: 1px solid #e6e7eb;\n    &:last-child {\n      border-bottom: none;\n    }\n  }\n  .demo-section-header {\n    padding: 0 15px;\n    font-size: 16px;\n    height: 50px;\n    line-height: 50px;\n  }\n\n  .demo-body {\n    padding-bottom: 10px;\n    > table {\n      border-collapse: collapse;\n      table-layout: fixed;\n    }\n  }\n\n  .demo-head {\n    > td {\n      padding: 0 10px;\n      text-align: left;\n      vertical-align: top;\n      font-size: 12px;\n      height: 30px;\n      line-height: 30px;\n      color: #999;\n    }\n  }\n\n  .demo-group {\n    .label {\n      width: 80px;\n      padding-right: 10px;\n      padding-top: 20px;\n      text-align: right;\n      font-size: 13px;\n      color: #999;\n      vertical-align: top;\n      > span {\n        display: block;\n        padding-bottom: 5px;\n        border-bottom: 1px solid #dcdee3;\n      }\n    }\n    .wrap {\n      padding: 10px 5px;\n      text-align: left;\n      vertical-align: top;\n    }\n  }\n\n  .demo-item {\n    padding: 10px;\n    border: 1px dashed transparent;\n    border-radius: 3px;\n    display: inline-block;\n    vertical-align: top;\n    overflow: hidden;\n    cursor: pointer;\n    position: relative;\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      z-index: 2;\n    }\n    &::after {\n      content: \" \";\n      display: block;\n      clear: left;\n    }\n    > * {\n      float: left;\n    }\n  }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledContainer = styled.div(_templateObject());

  var initDemo = function initDemo(compName) {
    var componentName = firstLowerCase(compName);
    window.compName = componentName;
    var parent = window.parent;

    if (parent !== window) {
      parent.postMessage({
        from: 'demo',
        type: 'loaded',
        body: '',
        compName: componentName
      }, '*');
    }
  };
  var firstLowerCase = function firstLowerCase(str) {
    return str.replace(/\B([A-Z])/g, "-$1").toLowerCase();
  };
  var renderAdaptor = function renderAdaptor(Adaptor) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(props).forEach(function (key) {
      if (_typeof_1(props[key]) === 'object' && !!props[key].adaptor) {
        var name = props[key].adaptor;
        var p = props[key].props;

        if (typeof window !== 'undefined' && window.adaptors && window.adaptors[name]) {
          props[key] = renderAdaptor(window.adaptors[name], p);
        } else {
          props[key] = React.createElement(name, p);
        }
      }
    });
    return Adaptor.adaptor(props);
  };

  var DemoItem =
  /*#__PURE__*/
  function (_Component) {
    inherits(DemoItem, _Component);

    function DemoItem() {
      classCallCheck(this, DemoItem);

      return possibleConstructorReturn(this, getPrototypeOf(DemoItem).apply(this, arguments));
    }

    createClass(DemoItem, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            height = _this$props.height,
            background = _this$props.background,
            node = _this$props.node,
            adaptor = _this$props.adaptor;
        if (!node) return null;
        var demoContent = renderAdaptor(adaptor, _extends_1({}, node.props));
        return React$1__default.createElement("div", {
          className: "demo-item",
          "data-demo": JSON.stringify({
            id: id,
            height: height,
            background: background,
            node: node
          }),
          style: {
            height: height || 'auto',
            background: background || ''
          }
        }, demoContent);
      }
    }]);

    return DemoItem;
  }(React$1.Component);

  DemoItem.propTypes = {
    id: propTypes.string,
    height: propTypes.number,
    background: propTypes.string,
    node: propTypes.object,
    adaptor: propTypes.object
  };

  var DemoSection =
  /*#__PURE__*/
  function (_Component) {
    inherits(DemoSection, _Component);

    function DemoSection(props) {
      var _this;

      classCallCheck(this, DemoSection);

      _this = possibleConstructorReturn(this, getPrototypeOf(DemoSection).call(this, props));

      _this.getBackground = function () {
        var demos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var background = demos.length > 0 ? demos[0].background : '';
        return demos.filter(function (demo) {
          return demo.background === background;
        }).length === demos.length ? background : '';
      };

      _this.state = {};
      return _this;
    }

    createClass(DemoSection, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            levelName = _this$props.levelName,
            demos = _this$props.demos,
            adaptor = _this$props.adaptor;
        var _this$state = this.state,
            sizes = _this$state.sizes,
            editorProps = _this$state.editorProps,
            states = _this$state.states;
        var sizeProp = findProp('size', editorProps);
        return React$1__default.createElement("div", {
          className: "demo-section"
        }, levelName ? React$1__default.createElement("div", {
          className: "demo-section-header"
        }, levelName) : null, React$1__default.createElement("div", {
          className: "demo-body",
          style: {
            background: this.getBackground(demos)
          }
        }, React$1__default.createElement("table", null, React$1__default.createElement("tbody", null, sizes.length > 0 ? React$1__default.createElement("tr", {
          className: "demo-head"
        }, React$1__default.createElement("td", null), sizes.map(function (_ref) {
          var label = _ref.label,
              value = _ref.value;
          return React$1__default.createElement("td", {
            key: value
          }, findOptionLabel(value, 'size', editorProps));
        })) : null, states.map(function (state) {
          return React$1__default.createElement("tr", {
            className: "demo-group",
            key: state
          }, React$1__default.createElement("td", {
            className: "label"
          }, React$1__default.createElement("span", null, state)), (sizes.length > 0 ? sizes : ['medium']).map(function (_ref2, index) {
            var label = _ref2.label,
                value = _ref2.value;
            var demo = demos.filter(filterDemoState(state)).find(function (_ref3) {
              var node = _ref3.node;

              var _ref4 = node || {},
                  _ref4$props = _ref4.props,
                  props = _ref4$props === void 0 ? {} : _ref4$props;

              if (sizeProp && value !== props.size) return false;
              return true;
            });
            if (!demo) return null;
            return React$1__default.createElement("td", {
              className: "wrap",
              key: index
            }, React$1__default.createElement(DemoItem, _extends_1({}, demo, {
              adaptor: adaptor
            })));
          }));
        })))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props) {
        var adaptor = props.adaptor,
            shape = props.shape;

        var _adaptor$editor = adaptor.editor(shape),
            editorProps = _adaptor$editor.props,
            editorDataOptions = _adaptor$editor.data;

        var _ref5 = findProp('level', editorProps) || {},
            _ref5$options = _ref5.options,
            levels = _ref5$options === void 0 ? [] : _ref5$options;

        var _ref6 = findProp('size', editorProps) || {},
            _ref6$options = _ref6.options,
            sizes = _ref6$options === void 0 ? [] : _ref6$options;

        return {
          levels: levels,
          sizes: sizes,
          states: getStates(editorDataOptions, editorProps),
          editorProps: editorProps
        };
      }
    }]);

    return DemoSection;
  }(React$1.Component);

  DemoSection.propTypes = {
    adaptor: propTypes.object,
    shape: propTypes.string,
    demos: propTypes.array,
    levelName: propTypes.string
  };

  var generate = (function (Adaptor) {
    var _class, _temp;

    Adaptor = normalizeAdaptor(Adaptor);
    var demos = generateDemos(Adaptor);
    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      inherits(DemoView, _Component);

      function DemoView(props) {
        var _this;

        classCallCheck(this, DemoView);

        _this = possibleConstructorReturn(this, getPrototypeOf(DemoView).call(this, props));

        _this.changeActiveId = function (id) {
          _this.setState({
            activeId: id
          });
        };

        _this.changeFilter = function (shape, name, value) {
          _this.setState({
            filter: _extends_1({}, _this.state.filter, defineProperty({}, shape, _extends_1({}, _this.state.filter[shape], defineProperty({}, name, value))))
          });
        };

        _this.createContentFilter = function (shape) {
          var _Adaptor$content = Adaptor.content(shape),
              options = _Adaptor$content.options;

          if (!options || options.length === 0) return null;
          var map = _this.state.filter[shape];
          return React$1__default.createElement("ul", {
            className: "demo-content-filter"
          }, options.map(function (_ref) {
            var name = _ref.name,
                label = _ref.label,
                op = _ref.options;
            return React$1__default.createElement("li", {
              key: name
            }, React$1__default.createElement("span", null, label), op.map(function (item) {
              return React$1__default.createElement("label", {
                key: item.value
              }, React$1__default.createElement("input", {
                type: "radio",
                defaultChecked: map[name] === item.value,
                onChange: function onChange() {
                  return _this.changeFilter(shape, name, item.value);
                },
                name: [shape, name].join('_'),
                value: item.value
              }), item.label);
            }));
          }));
        };

        var filter = {};
        Adaptor.shape.forEach(function (_ref2) {
          var value = _ref2.value;
          filter[value] = {};

          var _Adaptor$content2 = Adaptor.content(value),
              options = _Adaptor$content2.options;

          options.forEach(function (_ref3) {
            var name = _ref3.name,
                defaultValue = _ref3.default;
            filter[value][name] = defaultValue;
          });
        });
        _this.state = {
          demos: props.demos && props.demos.length > 0 ? props.demos : demos,
          activeId: '',
          filter: filter
        };

        if (!props.demos || props.demos.length === 0) {
          props.onDemoInit && props.onDemoInit(demos);
        }

        return _this;
      }

      createClass(DemoView, [{
        key: "generateDemos",
        value: function generateDemos() {
          var _this2 = this;

          var shapes = Adaptor.shape;
          return shapes.map(function (_ref4) {
            var label = _ref4.label,
                value = _ref4.value;

            var _Adaptor$editor = Adaptor.editor(value),
                props = _Adaptor$editor.props;

            var levelProp = findProp('level', props);

            var _Adaptor$content3 = Adaptor.content(value),
                transform = _Adaptor$content3.transform;

            var renderDemos = _this2.state.demos.filter(function (_ref5) {
              var node = _ref5.node;
              return node.props.shape === value;
            }).map(function (item) {
              return _extends_1({}, item, {
                node: _extends_1({}, item.node, {
                  props: transform ? transform(item.node.props, _this2.state.filter[value]) : item.node.props
                })
              });
            });

            return React$1__default.createElement("div", {
              className: "demo-shape",
              key: value
            }, React$1__default.createElement("div", {
              className: "demo-header"
            }, label), _this2.createContentFilter(value), levelProp ? levelProp.options.map(function (_ref6) {
              var label = _ref6.label,
                  level = _ref6.value;
              return React$1__default.createElement(DemoSection, {
                key: level,
                levelName: label,
                demos: renderDemos.filter(function (_ref7) {
                  var node = _ref7.node;
                  return node.props.level === level;
                }),
                adaptor: Adaptor,
                shape: value
              });
            }) : React$1__default.createElement(DemoSection, {
              key: "all",
              demos: renderDemos,
              adaptor: Adaptor,
              shape: value
            }));
          });
        }
      }, {
        key: "render",
        value: function render() {
          return React$1__default.createElement(StyledContainer, null, this.generateDemos());
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props) {
          if (props.demos) {
            return {
              demos: props.demos
            };
          }

          return null;
        }
      }]);

      return DemoView;
    }(React$1.Component), _class.componentName = Adaptor.name, _class.Adaptor = Adaptor, _class.propTypes = {
      demos: propTypes.array,
      onDemoInit: propTypes.func
    }, _temp;
  });

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function init(root) {
    if (!root) return;
    var editor = root.querySelector('textarea');
    var iconbox = root.querySelector('.iconbox');
    var toolbar = root.querySelector('.toolbar');
    var line;

    function updateCurrentLine() {
      var text = editor.value;
      var pos = editor.selectionStart;
      var head = 0;
      var tail = 0;
      var isDivider = false;
      var indent = 0;
      var prefix = '';
      var re;
      head = text.lastIndexOf('\n', pos - 1) + 1;
      tail = text.indexOf('\n', pos);

      if (tail === -1) {
        tail = text.length;
      }

      text = text.substring(head, tail);
      re = /^(\t*)-{3,}$/.exec(text);

      if (re) {
        isDivider = true;
        indent = (re[1] || '').length;
      } else {
        re = /^(\t*)([#\-~*]?)/.exec(text);
        indent = (re[1] || '').length;
        prefix = re[2] || '';
      }

      head += indent;
      line = {
        head: head,
        indent: indent,

        get prefix() {
          return prefix;
        },

        set prefix(value) {
          if (value === prefix) {
            setRangeText('', head, head + 1);
            prefix = '';
          } else if (prefix === '') {
            setRangeText(value, head, head);
            prefix = value;
          } else {
            setRangeText(value, head, head + 1);
            prefix = value;
          }

          updateToolbar();
        },

        isDivider: isDivider
      };
      updateToolbar();
    }

    function updateToolbar() {
      var html = '';

      if (!line.isDivider) {
        ['~', '*', '-', '#'].forEach(function (prefix) {
          html += "<span class=\"".concat(prefix === line.prefix ? 'active' : '', "\">").concat(prefix, "</span>");
        });
      }

      toolbar.innerHTML = html;
    }

    function initIconbox() {
      iconbox.innerHTML = ['<div class="trigger"></div>', '<div class="box">', '<span class="icon">atm</span>', '<span class="icon">atm</span>', '<span class="icon">atm</span>', '<span class="icon">atm</span>', '</div>'].join('');
    }

    function insertIcon(type) {
      var inset = "[".concat(type, "]");
      var len = inset.length;
      setRangeText(inset, editor.selectionStart, editor.selectionStart);
      editor.selectionStart += len; //editor.selectionEnd += len;
    }

    function setRangeText() {
      editor.setRangeText.apply(editor, arguments);
      editor.dispatchEvent(new Event('input', {
        bubbles: true
      }));
    }

    editor.addEventListener('keydown', function (e) {
      switch (e.keyCode) {
        case 9:
          e.preventDefault();
          setRangeText('\t', editor.selectionStart, editor.selectionStart);
          editor.selectionStart += 1; //editor.selectionEnd += 1;

          break;

        case 13:
          e.preventDefault();
          setRangeText('\n' + '\t'.repeat(line.indent), editor.selectionStart, editor.selectionStart);
          editor.selectionStart += 1 + line.indent; //editor.selectionEnd += 1 + indent;

          break;

        default:
      }
    });
    editor.addEventListener('keyup', updateCurrentLine);
    editor.addEventListener('click', updateCurrentLine);
    toolbar.addEventListener('click', function (e) {
      if (e.target.tagName === 'SPAN') {
        line.prefix = e.target.innerText;
      }

      editor.focus();
    });
    iconbox.addEventListener('click', function (e) {
      if (e.target.tagName === 'SPAN') {
        insertIcon(e.target.innerText);
      }

      editor.focus();
    });
    initIconbox();
    updateCurrentLine();
  }

  var CoolEditor =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(CoolEditor, _React$Component);

    function CoolEditor() {
      classCallCheck(this, CoolEditor);

      return possibleConstructorReturn(this, getPrototypeOf(CoolEditor).apply(this, arguments));
    }

    createClass(CoolEditor, [{
      key: "render",
      value: function render() {
        var name = this.props.name;
        var onChange = this.props.onChange;
        var value = this.props.value;
        return React$1__default.createElement("div", {
          id: "coolEditor"
        }, React$1__default.createElement("div", {
          className: "toolbar"
        }), React$1__default.createElement("div", {
          className: "iconbox"
        }), React$1__default.createElement("textarea", {
          name: name,
          onChange: onChange,
          value: value
        }));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        init(document.querySelector('#coolEditor'));
      }
    }]);

    return CoolEditor;
  }(React$1__default.Component);

  function _templateObject$1() {
    var data = taggedTemplateLiteral(["\n  font-size: 12px;\n  .editor-header {\n    background-color: #f2f3f7;\n    padding: 8px 16px;\n    font-size: 14px;\n    color: #333;\n  }\n  .editor-content {\n    padding: 4px 0;\n  }\n  .editor-sub-header {\n    padding: 4px 16px;\n    font-size: 12px;\n    color: #333;\n  }\n  .form-control {\n    font-size: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4px 16px;\n  }\n\n  .form-control.vertical {\n    display: block;\n  }\n\n  .form-control.vertical .form-label {\n    margin-bottom: 8px;\n    display: block;\n  }\n\n  .form-label {\n    color: #666;\n  }\n\n  .form-input {\n    width: 160px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    white-space: nowrap;\n  }\n\n  .form-input input,\n  .form-input select {\n    width: 100%;\n    height: 100%;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    font-size: 12px;\n    outline: none;\n    padding: 0 4px;\n    height: 20px;\n    color: #333;\n    background-color: #fff;\n  }\n\n  .form-input input[type=\"radio\"] {\n    width: auto;\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n  .form-input input[type=\"radio\"]:first-child {\n    margin-left: 0;\n  }\n\n\n  #coolEditor {\n    position: relative;\n  }\n\n  #coolEditor textarea {\n    border: 1px solid #ccc;\n    height: 200px;\n    width: 100%;\n    outline: none;\n    font-family: monospace;\n    margin-top: 4px;\n    tab-size: 2;\n  }\n\n  #coolEditor .toolbar {\n    float: left;\n  }\n\n  #coolEditor .toolbar span {\n    cursor: default;\n    display: inline-block;\n    margin: 1px;\n    width: 16px;\n    height: 16px;\n    background: #fff;\n    border-radius: 2px;\n    text-align: center;\n    line-height: 16px;\n    font-family: monospace;\n  }\n\n  #coolEditor .toolbar span:hover {\n    border: 1px solid #666;\n    height: 14px;\n    width: 14px;\n    line-height: 14px;\n  }\n\n  #coolEditor .toolbar .active {\n    background: #666;\n    color: #fff;\n  }\n\n  #coolEditor .iconbox {\n    float: right;\n    cursor: default;\n  }\n\n  #coolEditor .iconbox .trigger {\n    height: 16px;\n    width: 16px;\n    display: inline-block;\n    background: #fff;\n    line-height: 16px;\n    border-radius: 8px;\n  }\n\n  #coolEditor .iconbox .box {\n    display: none;\n    top: 16px;\n    right: 0;\n    padding: 5px;\n    width: 88px;\n    position: absolute;\n    background: #fff;\n    border: 1px solid #aaa;\n    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.1);\n  }\n\n  #coolEditor .iconbox .icon {\n    margin: 4px;\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    text-align: center;\n    line-height: 32px;\n  }\n\n  #coolEditor .iconbox .icon:hover {\n    background: #eee;\n    border-radius: 5px;\n  }\n\n  #coolEditor .iconbox:hover .box {\n    display: block;\n  }\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledEditor = styled.div(_templateObject$1());

  function _templateObject$2() {
    var data = taggedTemplateLiteral(["\n  height: ", ";\n  padding: 16px;\n  background: ", ";\n  line-height: 1.5;\n  font-size: 16px;\n  position: relative;\n  cursor: pointer;\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 10;\n  }\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledDemo = styled.div(_templateObject$2(), function (p) {
    return p.height ? "".concat(p.height + 32, "px") : 'auto';
  }, function (p) {
    return p.background;
  });

  var DemoEditor =
  /*#__PURE__*/
  function (_Component) {
    inherits(DemoEditor, _Component);

    function DemoEditor(props) {
      var _this;

      classCallCheck(this, DemoEditor);

      _this = possibleConstructorReturn(this, getPrototypeOf(DemoEditor).call(this, props));

      _this.getEditor = function () {
        var demo = _this.state.demo;
        var Adaptor = _this.props.Adaptor;
        if (!Adaptor) return null;
        var shape = demo && demo.node && demo.node.props && demo.node.props && demo.node.props.shape || Adaptor.shape[0].value;
        return Adaptor.editor(shape);
      };

      _this.handlePropsChange = function (name, value) {
        var demo = _this.state.demo;
        var Adaptor = _this.props.Adaptor;

        if (name === 'shape') {
          demo.node.props = getDefaultProps(Adaptor, value);
        }

        _this.setState({
          demo: _extends_1({}, demo, {
            node: _extends_1({}, demo.node, {
              props: _extends_1({}, demo.node.props, defineProperty({}, name, value))
            })
          })
        });
      };

      _this.handleDemoChange = function (name, value) {
        var demo = _this.state.demo;

        _this.setState({
          demo: _extends_1({}, demo, defineProperty({}, name, value))
        });
      };

      var _demo = props.demo;

      if (!_demo.node) {
        _demo.node = {
          adaptor: props.Adaptor.name,
          props: getDefaultProps(props.Adaptor, props.Adaptor.shape[0].value)
        };
      }

      _this.state = {
        demo: _demo
      };
      return _this;
    }

    createClass(DemoEditor, [{
      key: "createEditorItems",
      value: function createEditorItems() {
        var _this2 = this;

        var demo = this.state.demo;
        var Adaptor = this.props.Adaptor;
        var editor = this.getEditor();
        if (!editor) return null;
        var propTypes = editor.props;
        var result = [];

        if (Adaptor.shape.length > 1) {
          result.push(React$1__default.createElement("div", {
            key: "shape",
            className: "form-control"
          }, React$1__default.createElement("span", {
            className: "form-label"
          }, "Shape "), React$1__default.createElement("div", {
            className: "form-input"
          }, React$1__default.createElement("select", {
            value: demo.node.props.shape,
            onChange: function onChange(e) {
              return _this2.handlePropsChange('shape', e.target.value);
            }
          }, Adaptor.shape.map(function (_ref) {
            var display = _ref.label,
                v = _ref.value;
            return React$1__default.createElement("option", {
              key: v,
              value: v
            }, display);
          })))));
        }

        propTypes.forEach(function (_ref2) {
          var name = _ref2.name,
              label = _ref2.label,
              type = _ref2.type,
              options = _ref2.options;
          var value = demo.node.props[name];
          var inputNode;

          switch (type) {
            case Types$1.string:
              inputNode = React$1__default.createElement("div", {
                className: "form-input"
              }, React$1__default.createElement("input", {
                value: value,
                onChange: function onChange(e) {
                  return _this2.handlePropsChange(name, e.target.value);
                },
                type: "text"
              }));
              break;

            case Types$1.number:
              inputNode = React$1__default.createElement("div", {
                className: "form-input"
              }, React$1__default.createElement("input", {
                value: value,
                onChange: function onChange(e) {
                  return _this2.handlePropsChange(name, e.target.value);
                },
                type: "number"
              }));
              break;

            case Types$1.enum:
              inputNode = React$1__default.createElement("div", {
                className: "form-input"
              }, React$1__default.createElement("select", {
                value: value,
                onChange: function onChange(e) {
                  return _this2.handlePropsChange(name, e.target.value);
                }
              }, options.map(function (_ref3) {
                var display = _ref3.label,
                    v = _ref3.value;
                return React$1__default.createElement("option", {
                  key: v,
                  value: v
                }, display);
              })));
              break;

            case Types$1.bool:
              inputNode = React$1__default.createElement("div", {
                className: "form-input"
              }, React$1__default.createElement("input", {
                type: "radio",
                onChange: function onChange(e) {
                  return _this2.handlePropsChange(name, e.target.checked);
                },
                name: name,
                checked: value,
                id: "".concat(name, "_yes"),
                value: "yes"
              }), React$1__default.createElement("label", {
                htmlFor: "".concat(name, "_yes")
              }, "Yes"), React$1__default.createElement("input", {
                type: "radio",
                onChange: function onChange(e) {
                  return _this2.handlePropsChange(name, !e.target.checked);
                },
                name: name,
                checked: !value,
                id: "".concat(name, "_no"),
                value: "no"
              }), React$1__default.createElement("label", {
                htmlFor: "".concat(name, "_no")
              }, "No"));
              break;

            default:
              break;
          }

          result.push(React$1__default.createElement("div", {
            key: name,
            className: "form-control"
          }, React$1__default.createElement("span", {
            className: "form-label"
          }, label, " "), inputNode));
        });
        return result;
      }
    }, {
      key: "createPreviewDemo",
      value: function createPreviewDemo() {
        var demo = this.state.demo;
        var Adaptor = this.props.Adaptor;
        return React$1__default.createElement(StyledDemo, {
          height: demo.height,
          background: demo.background
        }, Adaptor.adaptor(demo.node.props));
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var demo = this.state.demo;
        var editor = this.getEditor();
        return React$1__default.createElement("div", null, React$1__default.createElement(StyledEditor, null, React$1__default.createElement("div", {
          className: "editor-header"
        }, "Demo"), React$1__default.createElement("div", {
          className: "editor-content"
        }, React$1__default.createElement("div", {
          className: "form-control"
        }, React$1__default.createElement("span", {
          className: "form-label"
        }, "Height: "), React$1__default.createElement("div", {
          className: "form-input"
        }, React$1__default.createElement("input", {
          value: demo.height || 'auto',
          onChange: function onChange(e) {
            return _this3.handleDemoChange('height', Number(e.target.value) || 0);
          }
        }))), React$1__default.createElement("div", {
          className: "form-control"
        }, React$1__default.createElement("span", {
          className: "form-label"
        }, "Background: "), React$1__default.createElement("div", {
          className: "form-input"
        }, React$1__default.createElement("input", {
          value: demo.background || 'transparent',
          onChange: function onChange(e) {
            return _this3.handleDemoChange('background', e.target.value);
          }
        })))), React$1__default.createElement("div", {
          className: "editor-header"
        }, "Options"), React$1__default.createElement("div", {
          className: "editor-content"
        }, this.createEditorItems()), editor && editor.data && [React$1__default.createElement("div", {
          key: "header",
          className: "editor-header"
        }, "Content"), React$1__default.createElement("div", {
          key: "content",
          className: "editor-content"
        }, React$1__default.createElement("div", {
          className: "form-control vertical"
        }, React$1__default.createElement(CoolEditor, {
          value: demo && demo.node && demo.node.props.data,
          onChange: function onChange(e) {
            return _this3.handlePropsChange('data', e.target.value);
          }
        })))], React$1__default.createElement("div", {
          className: "editor-header"
        }, "Preview"), this.createPreviewDemo()));
      }
    }]);

    return DemoEditor;
  }(React$1.Component);

  DemoEditor.propTypes = {
    Adaptor: propTypes.object,
    demo: propTypes.object
  };

  function _templateObject4() {
    var data = taggedTemplateLiteral(["\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n  z-index: 10;\n  width: 300px;\n  height: 50px;\n  color: rgb(85, 132, 255);\n  background-color: #fff;\n  border: none;\n  border-top: 1px solid #eee;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = taggedTemplateLiteral(["\n  height: ", ";\n  padding: 16px;\n  background: ", ";\n  line-height: 1.5;\n  font-size: 16px;\n  position: relative;\n  cursor: pointer;\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 10;\n  }\n  &:hover {\n    background-color: rgba(85,132,255, 0.2);\n    .close-icon-action {\n      display: flex;\n    }\n  }\n  .close-icon-action {\n    width: 20px;\n    height: 20px;\n    background: rgba(0, 0, 0, 0.7);\n    display: none;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 11;\n    color: #fff;\n    font-size: 12px;\n    line-height: 20px;\n  }\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = taggedTemplateLiteral(["\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 40px;\n      bottom: 0;\n      background-color: rgba(255, 255, 255, 0.7);\n      z-index: 30;\n    }\n  "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$3() {
    var data = taggedTemplateLiteral(["\n  padding-bottom: 50px;\n  height: 100%;\n  overflow: auto;\n  position: relative;\n  ", "\n"]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledCoolEditor = styled.div(_templateObject$3(), function (p) {
    return p.dragEnter && styled.css(_templateObject2());
  });
  var StyledDemo$1 = styled.div(_templateObject3(), function (p) {
    return p.height ? "".concat(p.height + 32, "px") : 'auto';
  }, function (p) {
    return p.background;
  });
  var StyledButton = styled.div(_templateObject4());

  var CoolEditor$1 =
  /*#__PURE__*/
  function (_Component) {
    inherits(CoolEditor, _Component);

    function CoolEditor(props) {
      var _this;

      classCallCheck(this, CoolEditor);

      _this = possibleConstructorReturn(this, getPrototypeOf(CoolEditor).call(this, props));

      _this.showActive = function () {
        _this.setState({
          active: true
        });
      };

      _this.hideActive = function () {
        _this.setState({
          active: false
        });
      };

      _this.handleRemoveDemo = function (id, e) {
        e.stopPropagation();

        _this.setState({
          cools: _this.state.cools.filter(function (item) {
            return item.id !== id;
          })
        });
      };

      _this.handleAddDemo = function () {
        _this.setState({
          demo: {},
          view: 'editor'
        });
      };

      _this.handleEditDemo = function (demo) {
        _this.setState({
          demo: demo,
          view: 'editor'
        });
      };

      _this.handleSaveDemo = function () {
        if (!_this.editor) return;
        var demo = _this.editor.state.demo;
        if (!demo) return;

        if (!demo.id) {
          _this.setState({
            cools: [].concat(toConsumableArray(_this.state.cools), [_extends_1({}, demo, {
              id: uuid()
            })]),
            view: 'list'
          });
        } else {
          _this.setState({
            cools: toConsumableArray(_this.state.cools).map(function (item) {
              if (item.id === demo.id) return demo;
              return item;
            }),
            view: 'list'
          });
        }
      };

      _this.saveEditorRef = function (ref) {
        _this.editor = ref;
      };

      _this.state = {
        active: false,
        cools: props.cools,
        view: 'list',
        demo: {},
        draging: false
      };
      return _this;
    }

    createClass(CoolEditor, [{
      key: "createCoolDemos",
      value: function createCoolDemos() {
        var _this2 = this;

        var Adaptor = this.props.Adaptor;
        var _this$state$cools = this.state.cools,
            cools = _this$state$cools === void 0 ? [] : _this$state$cools;
        return cools.map(function (_ref, index) {
          var id = _ref.id,
              node = _ref.node,
              height = _ref.height,
              background = _ref.background;
          return React$1__default.createElement(StyledDemo$1, {
            onClick: function onClick() {
              return _this2.handleEditDemo(cools[index]);
            },
            height: height,
            background: background,
            key: id
          }, Adaptor.adaptor(node.props), React$1__default.createElement("div", {
            className: "close-icon-action",
            onClick: function onClick(e) {
              return _this2.handleRemoveDemo(id, e);
            }
          }, "x"));
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            view = _this$state.view,
            demo = _this$state.demo,
            draging = _this$state.draging;
        var Adaptor = this.props.Adaptor;
        return React$1__default.createElement(StyledCoolEditor, {
          dragEnter: draging,
          onDrop: this.handleOnDrop,
          onDragEnter: this.handleDragEnter,
          onDragOver: this.handleDragOver,
          onDragLeave: this.handleDragLeave
        }, view === 'editor' ? React$1__default.createElement(DemoEditor, {
          Adaptor: Adaptor,
          demo: demo,
          ref: this.saveEditorRef
        }) : this.createCoolDemos(), view === 'editor' ? React$1__default.createElement(StyledButton, {
          onClick: this.handleSaveDemo
        }, "Save") : React$1__default.createElement(StyledButton, {
          onClick: this.handleAddDemo
        }, "Add"));
      }
    }]);

    return CoolEditor;
  }(React$1.Component);

  CoolEditor$1.propTypes = {
    Adaptor: propTypes.object,
    cools: propTypes.array
  };

  var ConfigPanel =
  /*#__PURE__*/
  function (_Component) {
    inherits(ConfigPanel, _Component);

    function ConfigPanel() {
      classCallCheck(this, ConfigPanel);

      return possibleConstructorReturn(this, getPrototypeOf(ConfigPanel).apply(this, arguments));
    }

    createClass(ConfigPanel, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Adaptor = _this$props.Adaptor,
            cools = _this$props.cools;
        return React$1__default.createElement("div", {
          className: "config-panel"
        }, React$1__default.createElement("div", {
          className: "config-panel-header"
        }, React$1__default.createElement("div", {
          className: "config-tabs"
        }, React$1__default.createElement("div", {
          className: "config-tab active"
        }, "Cool"))), React$1__default.createElement("div", {
          className: "config-panel-content",
          onDragEnter: this.handleDragEnter
        }, Adaptor && cools && cools.length > 0 && React$1__default.createElement(CoolEditor$1, {
          Adaptor: Adaptor,
          cools: cools
        })));
      }
    }]);

    return ConfigPanel;
  }(React$1.Component);

  ConfigPanel.propTypes = {
    Adaptor: propTypes.object,
    cools: propTypes.array
  };

  function _templateObject$4() {
    var data = taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n\n  .app-container {\n    flex: 1;\n    overflow: scroll;\n    padding: 16px;\n  }\n\n  .app-tools {\n    height: 100%;\n    width: 300px;\n    background-color: #f7f8fa;\n    box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.16);\n  }\n\n  .config-panel {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    position: relative;\n  }\n  .config-panel-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n    border-bottom: 1px solid #dedede;\n    flex-shrink: 0;\n  }\n\n  .config-tabs {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n\n  .config-tab {\n    width: 68px;\n    height: 100%;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #333;\n    position: relative;\n    cursor: pointer;\n  }\n\n  .config-tab::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 2px;\n    background-color: #5584FF;\n    transition: transform .3s;\n    transform: scale(0);\n    transform-origin: center center;\n  }\n\n  .config-tab.active {\n    color: #5584FF;\n\n  }\n\n  .config-tab.active::after {\n    transform: scale(0.8);\n  }\n\n  .config-components {\n    font-size: 14px;\n    padding: 0 24px 0 16px;\n    position: relative;\n    cursor: pointer;\n    color: #333;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .config-components:hover{\n    color: #5584FF;\n  }\n\n  .config-components::after {\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 7px solid currentColor;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    margin-top: -3px;\n  }\n\n  .config-components:hover::after{\n    border-top: none;\n    border-bottom: 7px solid currentColor;\n  }\n\n  .config-components-menu {\n    position: absolute;\n    top: 40px;\n    right: 4px;\n    background: #fff;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.16);\n    display: none;\n    z-index: 22;\n    height: 300px;\n    overflow: auto;\n  }\n  .config-components:hover .config-components-menu {\n    display: block;\n  }\n\n  .config-components-menu .menu-item {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 32px;\n    border: none;\n    background: none;\n    outline: none;\n    box-shadow: none;\n    width: 100%;\n    appearance: none;\n    cursor: pointer;\n    padding: 0 16px;\n  }\n\n  .config-components-menu .menu-item:hover {\n    background-color: #eee;\n    color: #5584FF;\n  }\n\n  .config-panel-content {\n    padding: 4px 0;\n    flex: 1;\n    overflow: auto;\n  }\n\n"]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledApp = styled.div(_templateObject$4());

  var generateApp = (function (DemoView) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_Component) {
      inherits(App, _Component);

      function App(_props) {
        var _this;

        classCallCheck(this, App);

        _this = possibleConstructorReturn(this, getPrototypeOf(App).call(this, _props));

        _this.handleDemoInit = function (demos) {
          _this.setState({
            demos: demos,
            cools: demos.filter(function (_ref) {
              var node = _ref.node;
              var props = node.props;
              var shape = props.shape,
                  size = props.size,
                  state = props.state,
                  data = props.data;
              var defaultProps = getDefaultProps(DemoView.Adaptor, shape);
              if (defaultProps.size && defaultProps.size !== size) return false;
              if (defaultProps.state && defaultProps.state.state !== state) return false;
              if (data && STATE_MARK[data.substring(0, 1)]) return false;
              return true;
            })
          });
        };

        _this.state = {
          demos: [],
          cools: []
        };
        return _this;
      }

      createClass(App, [{
        key: "render",
        value: function render() {
          var cools = this.state.cools;
          return React$1__default.createElement(StyledApp, null, React$1__default.createElement("div", {
            className: "app-container"
          }, React$1__default.createElement(DemoView, {
            onDemoInit: this.handleDemoInit
          })), React$1__default.createElement("div", {
            className: "app-tools"
          }, React$1__default.createElement(ConfigPanel, {
            cools: cools,
            Adaptor: DemoView.Adaptor,
            componentName: DemoView.componentName
          })));
        }
      }]);

      return App;
    }(React$1.Component), _temp;
  });

  var index$3 = (function (Adaptor) {
    var isProduction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var App = generate(Adaptor);

    if (!isProduction) {
      App = generateApp(App);
    }

    window.renderDemo = function () {
      ReactDOM.render(React$1__default.createElement(App, null), document.getElementById('root'));
    };

    window.renderDemo('en-us');
    initDemo(Adaptor.name);
  });

  return index$3;

}));
