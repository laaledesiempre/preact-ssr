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
var _hooks = require("preact/hooks");
var _reactrouterdom = require("react-router-dom");
var _Main = require("../../Main");
var _Style = require("../utils/Style");
var _icons = require("../icons");
var Nav = function() {
    var user = (0, _hooks.useContext)(_Main.StoreContext).user;
    var handleLogout = function() {
        window.sessionStorage.removeItem("token");
        location.reload();
    };
    return /*#__PURE__*/ (0, _preact.h)("header", null, /*#__PURE__*/ (0, _preact.h)("nav", null, /*#__PURE__*/ (0, _preact.h)(_reactrouterdom.NavLink, {
        to: "/"
    }, "Home"), !user && /*#__PURE__*/ (0, _preact.h)(_reactrouterdom.NavLink, {
        to: "/login"
    }, "Login"), !user && /*#__PURE__*/ (0, _preact.h)(_reactrouterdom.NavLink, {
        to: "/register"
    }, "Register")), user && /*#__PURE__*/ (0, _preact.h)("button", {
        class: "logout-button",
        onClick: function(e) {
            return handleLogout();
        }
    }, /*#__PURE__*/ (0, _preact.h)(_icons.Logout, null)), /*#__PURE__*/ (0, _preact.h)(_Style.Style, {
        name: "nav.css"
    }));
};
