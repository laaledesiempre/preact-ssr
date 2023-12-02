"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Home", {
    enumerable: true,
    get: function() {
        return Home;
    }
});
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _index = require("../../components/index.js");
var _axios = /*#__PURE__*/ _interop_require_default(require("axios"));
var _Main = require("../../Main");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Home = function() {
    var notes = (0, _hooks.useContext)(_Main.StoreContext).notes;
    return /*#__PURE__*/ (0, _preact.h)(_preact.Fragment, null, /*#__PURE__*/ (0, _preact.h)("h1", null, "Welcome to laaledesiempre's guest book!"), /*#__PURE__*/ (0, _preact.h)("h2", null, "This is currently a guest book where you can leave a message!"), /*#__PURE__*/ (0, _preact.h)("section", {
        class: "cards-wrapper"
    }, notes.map(function(e) {
        return /*#__PURE__*/ (0, _preact.h)(_index.Cards, {
            username: e.username,
            content: e.content,
            id: e.id
        });
    })), /*#__PURE__*/ (0, _preact.h)(_index.Style, {
        name: "home.css"
    }), /*#__PURE__*/ (0, _preact.h)(_index.Style, {
        name: "cards.css"
    }));
};
