"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ItemUI = function ItemUI(props) {
  var friendlyName = props.availableItems[props.item.type].name;
  var classOfDiv = "afb-item";
  if (props.selectedItem === props.index) classOfDiv += " afb-item-selected";
  if (props.item.required) classOfDiv += " afb-is-required";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classOfDiv,
    onClick: function onClick(e) {
      return props.onItemSelect(props.index);
    },
    draggable: "true",
    onDragStart: function onDragStart(e) {
      return props.dragStart(e, props.index);
    },
    onDragEnd: function onDragEnd(e) {
      return props.dragEnd(e, props.index);
    },
    onDragOver: function onDragOver(e) {
      return props.dragOver(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-trash afb-delete-icon btn-outline-danger",
    onClick: function onClick(e) {
      return props.onItemDelete(e, props.index);
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-clone afb-copy-icon btn-outline-success",
    onClick: function onClick(e) {
      return props.onItemDuplicate(e, props.index);
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "afb-item-type"
  }, friendlyName), /*#__PURE__*/_react["default"].createElement("div", {
    className: "afb-item-body"
  }, props.children));
};

var Component = function Component(props) {
  var renderItem = function renderItem(item, index) {
    var subcomponent;

    switch (item.type) {
      case "section":
        subcomponent = /*#__PURE__*/_react["default"].createElement("h2", null, item.text);
        break;

      case "paragraph":
        subcomponent = /*#__PURE__*/_react["default"].createElement("p", null, item.text);
        break;

      case "text":
        subcomponent = /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
          className: "afb-label"
        }, item.text), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
          type: "text",
          placeholder: item.placeholder,
          disabled: true
        }));
        break;

      case "email":
        subcomponent = /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
          className: "afb-label"
        }, item.text), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
          type: "email",
          placeholder: item.placeholder,
          disabled: true
        }));
        break;

      case "textarea":
        subcomponent = /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
          className: "afb-label"
        }, item.text), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
          type: "textarea",
          placeholder: item.placeholder,
          disabled: true
        }));
        break;

      case "select":
        subcomponent = /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
          className: "afb-label"
        }, item.text), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
          type: "select"
        }, item.options.map(function (option) {
          return /*#__PURE__*/_react["default"].createElement("option", null, option);
        })));
        break;

      case "checkbox":
        subcomponent = /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
          className: "afb-label"
        }, item.text), item.options.map(function (option) {
          return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
            check: true
          }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
            check: true
          }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
            type: "checkbox",
            disabled: true
          }), option));
        }));
        break;

      case "radio":
        subcomponent = /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
          className: "afb-label"
        }, item.text), item.options.map(function (option) {
          return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
            check: true
          }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
            check: true
          }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
            type: "radio",
            disabled: true
          }), option));
        }));
        break;

      case "date":
        subcomponent = /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
          className: "afb-label"
        }, item.text), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
          type: "date",
          disabled: true,
          style: {
            width: "100%"
          }
        }));
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(ItemUI, _extends({
      item: item,
      index: index
    }, props), subcomponent);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: props.dropzoneDiv
  }, props.items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "item-" + index
    }, props.dragPosition === index && /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
      sm: "12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "drag-position"
    }, "Drop Here"))), /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, {
      className: props.draggingItem === index ? "dragging-element" : ""
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
      sm: "12"
    }, renderItem(item, index))));
  }), props.items.length === 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "afb-no-items-present"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Add Form Elements")));
};

var _default = Component;
exports["default"] = _default;