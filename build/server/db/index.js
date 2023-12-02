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
    db: function() {
        return db;
    },
    startDatabase: function() {
        return startDatabase;
    }
});
var _sqlite3 = /*#__PURE__*/ _interop_require_default(require("sqlite3"));
var _queries = require("./queries");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var startDatabase = function() {
    var db = new _sqlite3.default.Database("./data.db");
    db.run(_queries.USER_TABLE_CREATION_QUERY);
    db.run(_queries.POSTS_TABLE_CREATION_QUERY);
    db.run(_queries.AUTH_TABLE_CREATION_QUERY);
    return db;
};
var db = startDatabase();
