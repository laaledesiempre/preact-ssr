"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Main: function() {
        return Main;
    },
    MainHydrate: function() {
        return MainHydrate;
    },
    StoreContext: function() {
        return StoreContext;
    }
});
var _preact = require("preact");
var _reactrouterdom = require("react-router-dom");
var _App = require("./App");
var _index = require("./components/index.js");
var _hooks = require("preact/hooks");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var StoreContext = (0, _preact.createContext)();
var Main = function() {
    var _useState = _sliced_to_array((0, _hooks.useState)(null), 2), user = _useState[0], setUser = _useState[1];
    var _useState1 = _sliced_to_array((0, _hooks.useState)([]), 2), notes = _useState1[0], setNotes = _useState1[1];
    var store = (0, _hooks.useMemo)(function() {
        return {
            user: user,
            setUser: setUser,
            notes: notes,
            setNotes: setNotes
        };
    }, [
        user,
        notes
    ]);
    return /*#__PURE__*/ (0, _preact.h)(_preact.Fragment, null, /*#__PURE__*/ (0, _preact.h)(StoreContext.Provider, {
        value: store
    }, /*#__PURE__*/ (0, _preact.h)(_App.App, null)), /*#__PURE__*/ (0, _preact.h)(_index.Style, {
        name: "main.css"
    }));
};
var MainHydrate = function() {
    return /*#__PURE__*/ (0, _preact.h)(_reactrouterdom.BrowserRouter, null, /*#__PURE__*/ (0, _preact.h)(Main, null));
};
