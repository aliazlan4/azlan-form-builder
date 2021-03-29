"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  return /*#__PURE__*/_react["default"].createElement("div", null, props.items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, {
      key: "item-" + index
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
      sm: "12"
    }, renderItem(item, index)));
  }), props.items.length === 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "afb-no-items-present"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Add Form Elements")));
};

var _default = Component;
exports["default"] = _default;