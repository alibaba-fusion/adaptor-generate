'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$1 = require('react');
var React$1__default = _interopDefault(React$1);
var ReactDOM = require('react-dom');
var ReactDOM__default = _interopDefault(ReactDOM);
var PropTypes = _interopDefault(require('prop-types'));
var adaptorHelper = require('@alifd/adaptor-helper');
var styled = _interopDefault(require('styled-components'));

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

  window.addEventListener('message', function (_ref) {
    var origin = _ref.origin,
        data = _ref.data;

    if (origin && origin.indexOf('fusion') !== -1) {
      var _ref2 = data || {},
          _ref2$from = _ref2.from,
          from = _ref2$from === void 0 ? '' : _ref2$from,
          _ref2$type = _ref2.type,
          type = _ref2$type === void 0 ? '' : _ref2$type;

      if (from !== 'fusion') return;

      switch (type) {
        case 'stylesheet':
          var _data$stylesheets = data.stylesheets,
              stylesheets = _data$stylesheets === void 0 ? [] : _data$stylesheets;
          document.querySelectorAll('[data-theme-style]').forEach(function (element) {
            return element.parentNode.removeChild(element);
          });
          stylesheets.forEach(function (url) {
            var stylesheet = document.createElement('link');
            stylesheet.setAttribute('rel', 'stylesheet');
            stylesheet.setAttribute('href', url);
            stylesheet.setAttribute('data-theme-style', true);
            document.head.appendChild(stylesheet);
          });
          return;

        case 'change_background':
          var _data$background = data.background,
              background = _data$background === void 0 ? '' : _data$background;
          document.body.style.background = background;
          return;

        default:
          break;
      }
    }
  });
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
/**
 * 判断是否是生产环境
 * @type {Boolean}
 */

var isProduction = function isProduction() {
  var result = false;

  return result;
};

var warningMsg = function warningMsg(msg) {
  if (isProduction()) {
    console.error(msg);
  } else {
    throw new Error(msg);
  }
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var adaptor = this.props.adaptor;
      var dom = ReactDOM.findDOMNode(this);

      if (dom && dom.firstElementChild) {
        var element = dom.firstElementChild;

        if (!element.hasAttribute('data-fusioncool')) {
          warningMsg("[ERROR]: ".concat(adaptor.name, " \u9700\u8981\u652F\u6301\u900F\u4F20\u5C5E\u6027 [data-XXX]\uFF0C\u5426\u5219 Fusion Cool \u65E0\u6CD5\u6B63\u5E38\u6E32\u67D3"));
        } else if (element.style.direction !== 'ltr') {
          warningMsg("[ERROR]: ".concat(adaptor.name, " \u9700\u8981\u652F\u6301\u900F\u4F20\u5C5E\u6027 [style]\uFF0C\u5426\u5219 Fusion Cool \u65E0\u6CD5\u6B63\u5E38\u6E32\u67D3"));
          element.style.direction = '';
        }
      } else {
        warningMsg("[ERROR]: ".concat(adaptor.name, " DOM \u8282\u70B9\u4E0D\u80FD\u4F7F\u7528 Portal\u6302\u8F7D\u5230\u5176\u4ED6\u5730\u65B9\u5965"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          height = _this$props.height,
          background = _this$props.background,
          node = _this$props.node,
          adaptor = _this$props.adaptor;
      if (!node) return null;
      var demoContent = renderAdaptor(adaptor, _extends_1({}, node.props, {
        style: {
          direction: 'ltr'
        },
        'data-fusioncool': 'test fusion cool render'
      }));
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
  id: PropTypes.string,
  height: PropTypes.number,
  background: PropTypes.string,
  node: PropTypes.object,
  adaptor: PropTypes.object
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
      var sizeProp = adaptorHelper.findProp('size', editorProps);
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
        }, adaptorHelper.findOptionLabel(value, 'size', editorProps));
      })) : null, states.map(function (state) {
        return React$1__default.createElement("tr", {
          className: "demo-group",
          key: state
        }, React$1__default.createElement("td", {
          className: "label"
        }, React$1__default.createElement("span", null, state)), (sizes.length > 0 ? sizes : ['medium']).map(function (_ref2, index) {
          var label = _ref2.label,
              value = _ref2.value;
          var demo = demos.filter(adaptorHelper.filterDemoState(state)).find(function (_ref3) {
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

      var _ref5 = adaptorHelper.findProp('level', editorProps) || {},
          _ref5$options = _ref5.options,
          levels = _ref5$options === void 0 ? [] : _ref5$options;

      var _ref6 = adaptorHelper.findProp('size', editorProps) || {},
          _ref6$options = _ref6.options,
          sizes = _ref6$options === void 0 ? [] : _ref6$options;

      return {
        levels: levels,
        sizes: sizes,
        states: adaptorHelper.getStates(editorDataOptions, editorProps),
        editorProps: editorProps
      };
    }
  }]);

  return DemoSection;
}(React$1.Component);

DemoSection.propTypes = {
  adaptor: PropTypes.object,
  shape: PropTypes.string,
  demos: PropTypes.array,
  levelName: PropTypes.string
};

var generate = (function (Adaptor) {
  var _class, _temp;

  Adaptor = adaptorHelper.normalizeAdaptor(Adaptor);
  var demos = adaptorHelper.generateDemos(Adaptor);
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

          var levelProp = adaptorHelper.findProp('level', props);

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
    demos: PropTypes.array,
    onDemoInit: PropTypes.func
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
        demo.node.props = adaptorHelper.getDefaultProps(Adaptor, value);
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
        props: adaptorHelper.getDefaultProps(props.Adaptor, props.Adaptor.shape[0].value)
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
          case adaptorHelper.Types.string:
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

          case adaptorHelper.Types.number:
            inputNode = React$1__default.createElement("div", {
              className: "form-input"
            }, React$1__default.createElement("input", {
              value: value,
              onChange: function onChange(e) {
                return _this2.handlePropsChange(name, Number(e.target.value) || 0);
              },
              type: "number"
            }));
            break;

          case adaptorHelper.Types.enum:
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

          case adaptorHelper.Types.bool:
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
  Adaptor: PropTypes.object,
  demo: PropTypes.object
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
            id: adaptorHelper.uuid()
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
  Adaptor: PropTypes.object,
  cools: PropTypes.array
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
  Adaptor: PropTypes.object,
  cools: PropTypes.array
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
            var defaultProps = adaptorHelper.getDefaultProps(DemoView.Adaptor, shape);
            if (defaultProps.size && defaultProps.size !== size) return false;

            if (defaultProps.state) {
              if (defaultProps.state !== state) return false;
            } else if (data && adaptorHelper.STATE_MARK[data.substring(0, 1)]) {
              return false;
            }

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

var index = (function (Adaptor) {
  var isProduction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var App = generate(Adaptor);

  if (!isProduction) {
    App = generateApp(App);
  }

  window.renderDemo = function () {
    ReactDOM__default.render(React$1__default.createElement(App, null), document.getElementById('root'));
  };

  window.renderDemo('en-us');
  initDemo(Adaptor.name);
});

module.exports = index;
