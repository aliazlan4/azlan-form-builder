"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  "section": {
    name: "Section",
    icon: "fas fa-puzzle-piece",
    defaultState: {
      type: "section",
      text: "New Section"
    }
  },
  "paragraph": {
    name: "Instructions",
    icon: "fas fa-info-circle",
    defaultState: {
      type: "paragraph",
      text: "New paragraph text"
    }
  },
  "text": {
    name: "Short Answer",
    icon: "fas fa-font",
    defaultState: {
      type: "text",
      text: "New text",
      required: false,
      placeholder: "New placeholder"
    }
  },
  "email": {
    name: "Email",
    icon: "fas fa-at",
    defaultState: {
      type: "email",
      text: "New Email",
      required: false,
      placeholder: "hello@example.com"
    }
  },
  "textarea": {
    name: "Long Answer",
    icon: "fas fa-align-left",
    defaultState: {
      type: "textarea",
      text: "New long text",
      required: false,
      placeholder: "New placeholder"
    }
  },
  "select": {
    name: "Dropdown",
    icon: "fas fa-caret-square-down",
    defaultState: {
      type: "select",
      text: "New dropdown",
      required: false,
      options: ["Option 1", "Option 2"]
    }
  },
  "checkbox": {
    name: "Checkbox",
    icon: "fas fa-check-square",
    defaultState: {
      type: "checkbox",
      text: "New checkbox",
      required: false,
      options: ["Option 1", "Option 2"]
    }
  },
  "radio": {
    name: "Multiple Choice",
    icon: "fas fa-dot-circle",
    defaultState: {
      type: "radio",
      text: "New multiple choice",
      required: false,
      options: ["Option 1", "Option 2"]
    }
  },
  "date": {
    name: "Date",
    icon: "fas fa-calendar-day",
    defaultState: {
      type: "date",
      text: "New date",
      required: false
    }
  }
};
exports["default"] = _default;