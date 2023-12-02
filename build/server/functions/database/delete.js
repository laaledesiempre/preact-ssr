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
    deletePost: function() {
        return deletePost;
    },
    deleteUser: function() {
        return deleteUser;
    }
});
var _db = require("../../db");
var _queries = require("../../db/queries");
var _utils = require("../utils");
var deleteUser = function(username) {
    _db.db.run(_queries.DELETE_USER_QUERY, [
        username
    ], function(e) {
        (0, _utils.handleError)(e);
    });
};
var deletePost = function(postId) {
    _db.db.run(_queries.DELETE_POST_QUERY, [
        postId
    ], function(e) {
        (0, _utils.handleError)(e);
    });
};
