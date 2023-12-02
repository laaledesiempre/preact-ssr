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
    createAuthEntry: function() {
        return createAuthEntry;
    },
    createPost: function() {
        return createPost;
    },
    createUser: function() {
        return createUser;
    }
});
var _db = require("../../db");
var _queries = require("../../db/queries");
var _utils = require("../utils");
var createUser = function(username, password, role) {
    _db.db.run(_queries.CREATE_USER_QUERY, [
        username,
        password,
        role
    ], function(e) {
        return (0, _utils.handleError)(e);
    });
};
var createPost = function(username, content) {
    _db.db.run(_queries.CREATE_POST_QUERY, [
        username,
        content
    ], function(e) {
        return (0, _utils.handleError)(e);
    });
};
var createAuthEntry = function(refreshKey, jwt) {
    _db.db.run(_queries.CREATE_AUTH_ENTRY_QUERY, [
        refreshKey,
        jwt
    ], function(e) {
        return (0, _utils.handleError)(e);
    });
};
