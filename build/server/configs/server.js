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
    APP_PORT: function() {
        return APP_PORT;
    },
    SECRET: function() {
        return SECRET;
    }
});
var APP_PORT = 3000;
var SECRET = process.env.SECRET || "secret";
