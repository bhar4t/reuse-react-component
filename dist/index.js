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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: function container(bottom, right) {
    var _ref;

    return _ref = {
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
      position: 'fixed'
    }, _defineProperty(_ref, bottom ? 'bottom' : 'top', 24), _defineProperty(_ref, right ? 'right' : 'left', 24), _ref;
  },
  indicator: function indicator(color) {
    return {
      backgroundColor: (COLORS === null || COLORS === void 0 ? void 0 : COLORS[color]) || COLORS.NONE,
      borderRadius: 25,
      height: 16,
      width: 20,
      margin: '8px 5px 5px 10px',
      border: 'solid white 2px'
    };
  },
  message: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'white',
    fontSize: '2vh',
    width: '-webkit-fill-available'
  },
  actionButton: {
    margin: '0px 8px',
    alignSelf: 'center',
    justifySelf: 'end',
    backgroundColor: 'black',
    color: 'white',
    pointerEvents: 'auto',
    padding: 4,
    borderRadius: 4,
    border: 'solid white 2px'
  }
};
var COLORS = {
  WARNING: '#ffbc5e',
  SUCCESS: '#6cff5e',
  ERROR: '#ff5e5e',
  NONE: '#c9c2c1'
};

function SnackBar(_ref2) {
  var message = _ref2.message,
      mode = _ref2.mode,
      open = _ref2.open,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? 'alert' : _ref2$className,
      _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === void 0 ? 3000 : _ref2$timeout,
      action = _ref2.action,
      _ref2$actionLabel = _ref2.actionLabel,
      actionLabel = _ref2$actionLabel === void 0 ? 'Okay' : _ref2$actionLabel,
      _ref2$bottom = _ref2.bottom,
      bottom = _ref2$bottom === void 0 ? true : _ref2$bottom,
      _ref2$right = _ref2.right,
      right = _ref2$right === void 0 ? true : _ref2$right,
      style = _ref2.style;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOn = _React$useState2[0],
      setIsOn = _React$useState2[1];

  var id = NaN;

  _react.default.useEffect(function () {
    if (open) {
      setIsOn(true);
      id = setTimeout(function () {
        setIsOn(false);
      }, timeout);
    }

    return function () {
      return clearTimeout(id);
    };
  }, [open, timeout]);

  if (isOn && (message === null || message === void 0 ? void 0 : message.length) > 0 && (mode.toUpperCase() === 'SUCCESS' || mode.toUpperCase() === 'ERROR' || mode.toUpperCase() === 'WARNING') && !isNaN(timeout)) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className,
      style: Object.assign({}, styles.container(bottom, right), (style === null || style === void 0 ? void 0 : style.containerStyle) || {})
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: styles.indicator(mode.toUpperCase())
    }), /*#__PURE__*/_react.default.createElement("span", {
      style: Object.assign({}, styles.message, (style === null || style === void 0 ? void 0 : style.textStyle) || {})
    }, message || 'No message'), typeof action === 'function' && (actionLabel === null || actionLabel === void 0 ? void 0 : actionLabel.length) < 25 ? /*#__PURE__*/_react.default.createElement("button", {
      style: Object.assign({}, styles.actionButton, (style === null || style === void 0 ? void 0 : style.buttonStyle) || {}),
      onClick: function onClick(e) {
        e.preventDefault();
        action(e);
      }
    }, actionLabel) : null);
  }

  return null;
}

var _default = SnackBar;
exports.default = _default;