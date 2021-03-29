"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Component = function Component(props) {
  if (props.selectedItem === null) {
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
      sm: "12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "afb-no-items-present"
    }, "No Item Selected")));
  }

  var item = props.items[props.selectedItem];
  var friendlyName = props.availableItems[item.type].name;

  var updateText = function updateText(ev) {
    item.text = ev.target.value;
    props.onSelectedItemUpdate(item);
  };

  var updatePlaceholder = function updatePlaceholder(ev) {
    item.placeholder = ev.target.value;
    props.onSelectedItemUpdate(item);
  };

  var updateOption = function updateOption(ev, index) {
    item.options[index] = ev.target.value;
    props.onSelectedItemUpdate(item);
  };

  var updateRequired = function updateRequired(ev) {
    item.required = !item.required;
    props.onSelectedItemUpdate(item);
  };

  var deleteOption = function deleteOption(index) {
    item.options.splice(index, 1);
    props.onSelectedItemUpdate(item);
  };

  var addOption = function addOption() {
    item.options.push("New option");
    props.onSelectedItemUpdate(item);
  };

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    sm: "12"
  }, item && /*#__PURE__*/_react["default"].createElement(_reactstrap.Card, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.CardHeader, null, friendlyName), /*#__PURE__*/_react["default"].createElement(_reactstrap.CardBody, {
    className: "afb-selected-form"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    className: "afb-label"
  }, "Text"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    type: "text",
    value: item.text,
    onChange: updateText
  })), item.placeholder !== undefined && /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    className: "afb-label"
  }, "Placeholder"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    type: "text",
    value: item.placeholder,
    onChange: updatePlaceholder
  })), item.options !== undefined && /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    className: "afb-label"
  }, "Options"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    size: "sm",
    color: "success",
    outline: true,
    style: {
      "float": "right"
    },
    onClick: addOption
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-plus"
  })), item.options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.InputGroup, {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.InputGroupAddon, {
      addonType: "prepend"
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.InputGroupText, null, index + 1)), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
      type: "text",
      value: option,
      onChange: function onChange(e) {
        return updateOption(e, index);
      }
    }), /*#__PURE__*/_react["default"].createElement(_reactstrap.InputGroupAddon, {
      addonType: "append"
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.InputGroupText, {
      className: "btn-danger cursor-pointer",
      onClick: function onClick(e) {
        return deleteOption(index);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "fa fa-trash"
    }))));
  })), item.required !== undefined && /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
    check: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    check: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    type: "checkbox",
    checked: item.required,
    onChange: updateRequired
  }), " Required?"))))));
};

var _default = Component;
exports["default"] = _default;