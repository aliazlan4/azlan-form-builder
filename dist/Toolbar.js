"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Component = function Component(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, Object.keys(props.availableItems).map(function (type, index) {
    var item = props.availableItems[type];
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
      sm: "12",
      md: "6",
      className: "afb-toolbar-item-parent",
      key: "toolbar-item-" + index,
      draggable: "true",
      onDragEnd: function onDragEnd(e) {
        return props.dragEnd(e, type);
      },
      onDragOver: function onDragOver(e) {
        return props.dragOver(e);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "afb-toolbar-item",
      onClick: function onClick(e) {
        return props.newItem(type);
      }
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: item.icon + " mr-2"
    }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("p", null, item.name)));
  }));
};

var _default = Component;
exports["default"] = _default;