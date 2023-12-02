"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Register", {
    enumerable: true,
    get: function() {
        return Register;
    }
});
var _preact = require("preact");
var Register = function() {
    return /*#__PURE__*/ (0, _preact.h)(_preact.Fragment, null, /*#__PURE__*/ (0, _preact.h)("form", null, /*#__PURE__*/ (0, _preact.h)("label", {
        for: "mail"
    }, "Mail"), /*#__PURE__*/ (0, _preact.h)("input", {
        type: "email",
        id: "mail"
    }), /*#__PURE__*/ (0, _preact.h)("label", {
        for: "username"
    }, "Username"), /*#__PURE__*/ (0, _preact.h)("input", {
        type: "text",
        id: "username"
    }), /*#__PURE__*/ (0, _preact.h)("label", {
        for: "password"
    }, "Password "), /*#__PURE__*/ (0, _preact.h)("input", {
        type: "password",
        id: "password"
    }), /*#__PURE__*/ (0, _preact.h)("button", {
        type: "submit"
    }, "Register")));
};
