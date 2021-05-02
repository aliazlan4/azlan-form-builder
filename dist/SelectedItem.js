"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _reactDraftWysiwyg = require("react-draft-wysiwyg");

var _draftJs = require("draft-js");

var _draftJsExportHtml = require("draft-js-export-html");

require("react-draft-wysiwyg/dist/react-draft-wysiwyg.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var options = {
  options: ["inline", "list", "link", "embedded", "image", "emoji"],
  inline: {
    inDropdown: true
  },
  list: {
    inDropdown: true
  }
};

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

  var makeEditorState = function makeEditorState(text) {
    var blocksFromHTML = (0, _draftJs.convertFromHTML)(text);
    return _draftJs.EditorState.createWithContent(_draftJs.ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap));
  };

  var _useState = (0, _react.useState)(makeEditorState(item.text)),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  (0, _react.useEffect)(function () {
    setEditorState(makeEditorState(item.text));
  }, [item]);

  var updateParagraphText = function updateParagraphText(state) {
    setEditorState(state);
    item.text = (0, _draftJsExportHtml.stateToHTML)(state.getCurrentContent());
    props.onSelectedItemUpdate(item);
  };

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
  }, "Text"), item.type === "paragraph" ? /*#__PURE__*/_react["default"].createElement(_reactDraftWysiwyg.Editor, {
    editorState: editorState,
    toolbar: options,
    toolbarClassName: "toolbarClassName",
    wrapperClassName: "wrapperClassName",
    editorClassName: "editorClassName",
    onEditorStateChange: updateParagraphText
  }) : /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
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