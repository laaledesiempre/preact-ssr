"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Nav", {
    enumerable: true,
    get: function() {
        return Nav;
    }
});
var _preact = require("preact");
var _reactrouterdom = require("react-router-dom");
var Nav = function() {
    return /*#__PURE__*/ (0, _preact.h)("header", null, /*#__PURE__*/ (0, _preact.h)("nav", null, /*#__PURE__*/ (0, _preact.h)(_reactrouterdom.NavLink, {
        to: "/"
    }, "Home"), /*#__PURE__*/ (0, _preact.h)(_reactrouterdom.NavLink, {
        to: "/login"
    }, "Login"), /*#__PURE__*/ (0, _preact.h)(_reactrouterdom.NavLink, {
        to: "/register"
    }, "Register")));
};
