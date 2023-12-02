"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Style", {
    enumerable: true,
    get: function() {
        return Style;
    }
});
var _preact = require("preact");
var Style = function(props) {
    return /*#__PURE__*/ (0, _preact.h)("link", {
        rel: "stylesheet",
        href: "./" + props.name
    });
};
