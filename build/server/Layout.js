//Imports:
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Layout", {
    enumerable: true,
    get: function() {
        return Layout;
    }
});
var _preact = require("preact");
var _server = require("react-router-dom/server");
var Layout = function(props) {
    return /*#__PURE__*/ (0, _preact.h)(_preact.Fragment, null, /*#__PURE__*/ (0, _preact.h)("html", null, /*#__PURE__*/ (0, _preact.h)("head", null, /*#__PURE__*/ (0, _preact.h)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
    }), /*#__PURE__*/ (0, _preact.h)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
    }), /*#__PURE__*/ (0, _preact.h)("link", {
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap",
        rel: "stylesheet"
    }), /*#__PURE__*/ (0, _preact.h)("title", null, props.title)), /*#__PURE__*/ (0, _preact.h)("body", null, /*#__PURE__*/ (0, _preact.h)(_server.StaticRouter, {
        location: props.location
    }, props.children)), /*#__PURE__*/ (0, _preact.h)("script", {
        type: "module",
        src: "/client.js",
        async: true
    })));
};
