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
var _axios = /*#__PURE__*/ _interop_require_default(require("axios"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Register = function() {
    var handleSubmit = function(e) {
        e.preventDefault();
        var _e_target = e.target, username = _e_target.username, password = _e_target.password;
        _axios.default.post("./db/create/user", {
            username: username.value,
            password: password.value
        }).then(function(response) {
            console.log(response);
            location.replace("./login");
        }).catch(function(err) {
            alert(err);
        });
    };
    return /*#__PURE__*/ (0, _preact.h)(_preact.Fragment, null, /*#__PURE__*/ (0, _preact.h)("form", {
        class: "auth-form",
        onSubmit: function(e) {
            handleSubmit(e);
        }
    }, /*#__PURE__*/ (0, _preact.h)("label", {
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
