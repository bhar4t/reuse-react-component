"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = {
  container: {
    height: 50,
    width: 'auto',
    maxWidth: '50%',
    minWidth: '25%',
    background: 'linear-gradient(144deg, rgba(2,0,36, .7) 0%, rgba(121,9,90,.7) 0%, rgba(95,53,126,.7) 46%, rgba(0,212,255,.7) 100%)',
    display: 'flex',
    alignItems: 'center',
    zIndex: 999,
    borderRadius: 20,
    border: 'white double 8px',
    pointerEvents: 'none',
    position: 'fixed',
    bottom: 24,
    right: 24
  },
  indicator: function indicator(color) {
    return {
      backgroundColor: (COLORS === null || COLORS === void 0 ? void 0 : COLORS[color]) || COLORS.NONE,
      borderRadius: 25,
      height: '2.5vh',
      width: '2.5vh',
      margin: '8px 5px 5px 10px',
      border: 'solid white 2px'
    };
  },
  message: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'white',
    fontSize: '2vh'
  }
};
var COLORS = {
  WARNING: '#ffbc5e',
  SUCCESS: '#6cff5e',
  ERROR: '#ff5e5e',
  NONE: '#c9c2c1'
};

function ReuseableComponent(_ref) {
  var message = _ref.message,
      mode = _ref.mode,
      open = _ref.open,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 3000 : _ref$timeout;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOn = _React$useState2[0],
      setIsOn = _React$useState2[1];

  var _React$useState3 = _react.default.useState(function () {}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      timeOutListener = _React$useState4[0],
      setListener = _React$useState4[1];

  _react.default.useEffect(function () {
    if (open) {
      setIsOn(true);
      var unsubscribe = setTimeout(function () {
        setIsOn(false);
      }, timeout);
      setListener(unsubscribe);
    }

    return function () {
      return timeOutListener();
    };
  }, [open, timeOutListener, timeout]);

  return isOn ? /*#__PURE__*/_react.default.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: styles.indicator(mode)
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: styles.message
  }, message || 'Default message')) : null;
}

var _default = ReuseableComponent;
exports.default = _default;