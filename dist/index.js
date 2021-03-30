"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _ListItems = _interopRequireDefault(require("./ListItems"));

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

var _SelectedItem = _interopRequireDefault(require("./SelectedItem"));

var _availableItems = _interopRequireDefault(require("./availableItems"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Component = function Component(props) {
  var _useState = (0, _react.useState)(props.availableItems || _objectSpread({}, _availableItems["default"])),
      _useState2 = _slicedToArray(_useState, 1),
      allItems = _useState2[0];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedItem = _useState6[0],
      setSelectedItem = _useState6[1];

  var bottomRef = (0, _react.useRef)(null);
  var didMount = (0, _react.useRef)(false); //////////// webhooks to world ///////////
  // call props.onUpdate whenever items changes

  (0, _react.useEffect)(function () {
    if (didMount.current) {
      props.onUpdate(items);
    } else {
      didMount.current = true;
    }
  }, [items]); // updating items array and UI after items are changed in parent component

  (0, _react.useEffect)(function () {
    didMount.current = false;

    if (props.items) {
      setItems(props.items);
    }
  }, [props.items]); //////////// internal functions ///////////

  var newItem = function newItem(type) {
    items.push(_objectSpread({}, allItems[type].defaultState));
    setItems(_toConsumableArray(items));
    bottomRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  var onItemSelect = function onItemSelect(id) {
    if (id === selectedItem) setSelectedItem(null);else setSelectedItem(id);
  };

  var onItemDelete = function onItemDelete(event, id) {
    event.stopPropagation(); // stop parent div onClick to be triggered

    selectedItem === id && setSelectedItem(null);
    items.splice(id, 1);
    setItems(_toConsumableArray(items));
  };

  var onItemDuplicate = function onItemDuplicate(event, id) {
    event.stopPropagation(); // stop parent div onClick to be triggered

    items.splice(id + 1, 0, _objectSpread({}, items[id]));
    setItems(_toConsumableArray(items));
  };

  var onSelectedItemUpdate = function onSelectedItemUpdate(item) {
    if (selectedItem === null) return;
    items[selectedItem] = item;
    setItems(_toConsumableArray(items));
  };

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, {
    className: "afb-container"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    xs: 3,
    className: "afb-container-left afb-float"
  }, /*#__PURE__*/_react["default"].createElement(_SelectedItem["default"], {
    items: items,
    selectedItem: selectedItem,
    availableItems: allItems,
    onSelectedItemUpdate: onSelectedItemUpdate
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    xs: {
      size: 6,
      offset: 3
    },
    className: "afb-container-center"
  }, /*#__PURE__*/_react["default"].createElement(_ListItems["default"], {
    items: items,
    selectedItem: selectedItem,
    onItemSelect: onItemSelect,
    onItemDelete: onItemDelete,
    onItemDuplicate: onItemDuplicate,
    availableItems: allItems
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: bottomRef
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    xs: 3,
    className: "afb-container-right afb-float"
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
    newItem: newItem,
    availableItems: allItems
  })));
};

var _default = Component;
exports["default"] = _default;